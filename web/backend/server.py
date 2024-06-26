from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from tensorflow.keras.models import load_model
import pandas as pd
import pathlib
from contextlib import asynccontextmanager
import json
from model_trainer import ModelTrainer

@asynccontextmanager
async def lifespan(app: FastAPI):
    global INDEX
    global MODEL
    model_name = "model_mark4.h5"

    dataset_path = pathlib.PosixPath("../../colab/all_stocks_5yr.csv")
    model_path = pathlib.Path(f"../../colab/models/{model_name}")

    try:
        INDEX = pd.read_csv(dataset_path)
        print("Dataset loaded successfully.")
    except Exception as e:
        print(f"Failed to load dataset: {repr(e)}")

    try:
        MODEL = load_model(model_path)
        print("Model loaded successfully.")
    except Exception as e:
        print(f"Failed to load model: {repr(e)}")

    yield
    print("Done")

app = FastAPI(lifespan=lifespan)

origins = [
    "*"
    # "http://localhost:3000",  
    # "https://trademind.pages.dev/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/symbols/')
async def get_all_symbols():
    symbols = pd.unique(INDEX["Name"]).tolist()
    return JSONResponse(content=symbols)

@app.get('/predict/{symbol}/{years}')
async def predict(symbol: str, years: int):
    model_trainer = ModelTrainer("../../colab/all_stocks_5yr.csv")
    prediction = model_trainer(symbol, years)
    return prediction