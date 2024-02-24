<img src="https://github.com/carsonSgit/TradeMind/assets/93663166/b2fe34e3-07f1-4f47-872c-a0cf0b1a0c7b" alt="TradeMind AI Logo" width="800" /> 
<br>
<br>
Welcome to TradeMind AI - your intelligent stock analytics companion! This repository contains the codebase for TradeMind AI, a project developed as part of the AI Launch Lab's R&D AI Program. TradeMind AI leverages artificial intelligence techniques to provide insightful analysis and predictions in the stock market domain.

## About AI Launch Lab's R&D AI Program

[Ai Launch Lab's R&D AI Program](https://launchlab.ai/) is a comprehensive learning experience designed to equip participants with a deep understanding of various AI concepts while providing hands-on project development opportunities. Throughout the program, participants engage in weekly sessions, quizzes, and activities led by AI specialists. The program culminates in the development and presentation of team projects, offering participants the chance to apply their newfound knowledge and skills.

### The Program Roadmap

- **Weeks 1-6**: Weekly sessions covering diverse AI topics facilitated by AI specialists. Participants engage in quizzes and activities to reinforce learning. Concurrently, teams work on developing their projects under the guidance of mentors.

- **Week 7**: Data Challenge at Dawson College, scheduled from March 22 to 24, 2024. All cohort participants are encouraged to participate in this hands-on challenge.

- **Week 8**: Feedback session with AI educators and mentors on project progress. Participants engage in presentation rehearsals to prepare for the final showcase.

- **Week 9**: Final presentations of AI projects at Dawson College on Friday, April 5, 2024. Certificates will be awarded based on project completion, attendance, and participation.

## Project Overview

TradeMind AI is a stock analytics AI designed to assist users in making informed decisions in the stock market. Leveraging cutting-edge AI techniques, TradeMind AI provides insightful analysis, predictions, and recommendations, empowering users to navigate the complexities of stock trading with confidence.

### Dataset

For our dataset, we have decided on the [S&P 500 stock data](https://www.kaggle.com/datasets/camnugent/sandp500) created by [Cam Nugent](https://www.kaggle.com/camnugent)

This dataset provides historical stock price data for companies listed on the S&P 500 index from 2013 to 2018. It includes information on the opening, highest, lowest, and closing prices of stocks, as well as trading volume, all denominated in USD. The dataset is available in both individual files for each stock and as a merged CSV file. Users can leverage various formats to conduct analyses such as visualizations, stock comparisons, and predictive modeling for informed trading decisions.

### Data Attributes

For the AI model, we'll utilize the following attributes/features from the dataset:

1. Date (Temporal data)
2. Open (Opening stock price)
3. High (Highest price reached)
4. Low (Lowest price reached)
5. Close (Closing stock price)
6. Volume (Number of shares traded)
7. Name (Stock ticker)

### Data Cleaning

- **Handling Missing Values:**
We'll assess each column for missing data. If only a few values are missing, we'll consider filling them with mean/median values or using interpolation. For significant missing data, we may opt to drop those rows or impute values based on other features.

- **Handling Outliers:**
Outliers can arise from extreme market shifts, data collection errors, or corporate events. We'll visualize the data distribution and employ statistical techniques like Z-score or Interquartile Range (IQR) to detect outliers. Depending on the situation, we may cap extreme values or remove them from the dataset.

- **Handling Inconsistencies:**
We'll scrutinize the data for inconsistencies like irregular date formats, negative stock prices (if not feasible), or implausible values in other columns. Any inconsistencies found will be rectified or eliminated as necessary.

### Key Features

- **TBD...**

## Getting Started

To get started with TradeMind AI, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using `git clone https://github.com/carsonSgit/TradeMind`.
2. **TBD...**
3. t
