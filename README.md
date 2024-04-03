<img src="https://github.com/carsonSgit/TradeMind/assets/93663166/b2fe34e3-07f1-4f47-872c-a0cf0b1a0c7b" alt="TradeMind AI Logo" width="800" /> 
<br>
<br>
<hr>

👋 Welcome to TradeMind AI - your intelligent stock analytics companion! This repository contains the codebase for TradeMind AI, a project developed as part of the AI Launch Lab's R&D AI Program. TradeMind AI leverages artificial intelligence techniques to provide insightful analysis and predictions in the stock market domain.
<br>

> TradeMind AI is designed to provide insightful analysis and predictions in the stock market domain. Please read through the documentation thoroughly to understand its functionalities and limitations.

# 🎓 Project Overview

TradeMind AI is a stock analytics AI designed to assist users in making informed decisions in the stock market. Leveraging cutting-edge AI techniques, TradeMind AI provides insightful analysis, predictions, and recommendations, empowering users to navigate the complexities of stock trading with confidence.

> Utilize TradeMind AI as a supplementary tool to your existing research and analysis. While it offers valuable insights, always consider multiple sources of information before making trading decisions.

See our [colab notebook](https://colab.research.google.com/drive/1iF8vrqAI5z4uwKgJQ-MhEdLHXmqqIr4k)

## Problem Identification and Scope

### 📈 Problem Definition

Trading stocks can difficult, stressful and financially dangerous. It can be very difficult for individuals who don't have much free time to trade stocks. Watching the market, even when it only applies to long term investments, can require a large amount of time and focus that most people can't afford. Our goal in creating TradeMind is to make stock trading more accessible to all.

### 🌎 Target Audience

The core target audience for our stock analytics AI is primarily for those who are interested in investing and want a second opinion before putting money into the "pot". It should also be noted that this should be used for long term investments and growth as opposed to short term daily trading.

> Remember that past performance is not indicative of future results. Use TradeMind AI as a tool to complement your investment strategy, but be aware of potential risks associated with stock market trading.

### 📋 Scope and Constraints

Our AI tool will analyze the closing data of each stock within the S&P 500 index. From this, it will be able to make long term predictions regarding the future of the stock so that the user has a helpful guide for their investments.

### 🏆 Success Criteria 

**Front-End:** A working front-end website that is hosted online. The site should have four pages, home, about, roadmap, and analytics. The page should be visually appealing, user-friendly, and interactive. Users should be able to access the AI service easily.

**Back-End:** API should expose endpoints that provide all necessary information and services required by the front-end. The API should allow the front-end to perform interactions and queries with the AI model.

**AI Model**: The model should be trained sufficiently enough that it can reliably predict stock prices for all present indices in our stock index selection.

## Data Collection and Preparation

### 📊 Dataset

For our dataset, we have decided on the [S&P 500 stock data](https://www.kaggle.com/datasets/camnugent/sandp500) created by [Cam Nugent](https://www.kaggle.com/camnugent)

This dataset provides historical stock price data for companies listed on the S&P 500 index from 2013 to 2018. It includes information on the opening, highest, lowest, and closing prices of stocks, as well as trading volume, all denominated in USD. The dataset is available in both individual files for each stock and as a merged CSV file. Users can leverage various formats to conduct analyses such as visualizations, stock comparisons, and predictive modeling for informed trading decisions.

### 📝 Data Attributes

Through the dataset, we are provided with the following data attributes:

1. Date (Temporal data)
2. Close (Closing stock price)

## 🚀 Getting Started

To get started with TradeMind AI, follow these steps:

- **Head to our website**: Our hosted [website](https://trademind.pages.dev/) houses functionality for our AI, to find it, navigate to the "Analytics" page!

**OR** 

- **Use our Colab Notebook**: Dive into the provided [colab notebook](https://colab.research.google.com/drive/1iF8vrqAI5z4uwKgJQ-MhEdLHXmqqIr4k) to explore data preprocessing, visualization, and initial modeling. 
