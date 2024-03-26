from typing import Any
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
import pandas as pd
from numpy import ndarray

class ModelTrainer:
    def __init__(self, stock_data_path):
        self.stocks_data = pd.read_csv(stock_data_path)
        self.poly_model = None
        self.poly_features = None
    
    def __call__(self, symbol: str, years_to_predict: int) -> dict:
        self.__load_data(symbol)
        self.__prepare_data()
        self.__train_model()
        return self.__predict(years_to_predict)

    def __load_data(self, symbol: str):
        self.stocks_data = self.stocks_data[self.stocks_data['Name'] == symbol]
        self.stocks_data['date'] = pd.to_datetime(self.stocks_data['date'])
        self.stocks_data['days_since_start'] = (self.stocks_data['date'] - self.stocks_data['date'].min()).dt.days

    def __prepare_data(self):
        daily_avg_close = self.stocks_data.groupby('days_since_start')['close'].mean().reset_index()
        self.X = daily_avg_close['days_since_start'].values.reshape(-1, 1)
        self.y = daily_avg_close['close'].values

    def __train_model(self):
        X_train, X_test, y_train, y_test = train_test_split(self.X, self.y, test_size=0.2, random_state=42)
        self.poly_features = PolynomialFeatures(degree=2)
        X_poly_train = self.poly_features.fit_transform(X_train)
        self.poly_model = LinearRegression()
        self.poly_model.fit(X_poly_train, y_train)

    def __predict(self, years_to_predict: int):
        last_day = self.stocks_data['days_since_start'].max()
        future_days = pd.date_range(start=self.stocks_data['date'].max(), periods=365 * years_to_predict + 1)
        future_days_since_start = (future_days - self.stocks_data['date'].min()).days
        X_future = future_days_since_start.values.reshape(-1, 1)
        X_future_poly = self.poly_features.transform(X_future)
        y_future_pred = self.poly_model.predict(X_future_poly)

        # Prepare historical data
        historical_data = self.stocks_data[['days_since_start', 'close']].to_dict('records')

        # Prepare predicted data
        predicted_data = [{'days_since_start': int(day), 'close': price} for day, price in zip(X_future.flatten(), y_future_pred)]

        return {
            'historical': historical_data,
            'predicted': predicted_data
        }