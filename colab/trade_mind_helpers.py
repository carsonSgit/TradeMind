import pandas as pd
import matplotlib.pyplot as plt
from matplotlib import pyplot as plt
import seaborn as sns
import matplotlib.dates as mdates

def get_training_data(df: pd.DataFrame, split_date: str = "2017-07-17") -> tuple[pd.DataFrame, pd.DataFrame]:
  """
  Splits a DataFrame into two based on a specified date.

  Parameters:
  - df: The DataFrame to split.
  - date_column: The name of the column containing dates.
  - split_date: The date to split the DataFrame on, given as a string in 'YYYY-MM-DD' format.

  Returns:
  - before_df: A DataFrame with rows where the date_column is before the split_date.
  - after_df: A DataFrame with rows where the date_column is on or after the split_date.
  """
  date_column = 'date'
  df[date_column] = pd.to_datetime(df[date_column])
  
  before_df = df[df[date_column] < split_date]
  after_df = df[df[date_column] >= split_date]
  
  return before_df, after_df

def get_company_by_symbol(symbol: str) -> pd.DataFrame:
  """
  Returns a DataFrame containing the stock history of the company symbol provided.

  Parameters:
  - symbol: The symbol of the company.

  Returns:
  - A DataFrame of the companies stock history. 
  """
  return INDEX[INDEX['Name'] == symbol.upper()]

def plot_df_time_series(
    dataframe: pd.DataFrame, 
    value_column: str = 'open', 
    tick_rotation: int = 45, 
    figsize: tuple[float, float] = (10, 5.2), 
    xlabel: str ='Date', ylabel: str ='Open', 
    title: str = 'Time Series Plot', 
    start_date: str = None,
    end_date: str = None,
    periods: int = 5
    ):
  """
  Plots a time series from a pandas DataFrame.

  This function is designed for flexibility in visualizing time series data, allowing
  customization of the plot appearance, the data range, and the granularity of the x-axis ticks.

  Parameters:
  ----------
  dataframe : pd.DataFrame
      The DataFrame containing the time series data to plot. The DataFrame should have a datetime
      index or a column that can be converted to datetime.
      
  value_column : str, optional
      The name of the column in `dataframe` that contains the values to plot. Defaults to 'open'.
      
  tick_rotation : int, optional
      The rotation angle (in degrees) for the x-axis tick labels, to improve readability. Defaults to 45.
      
  figsize : tuple[float, float], optional
      The size of the figure to create, specified as (width, height) in inches. Defaults to (10, 5.2).
      
  xlabel : str, optional
      The label for the x-axis. Defaults to 'Date'.
      
  ylabel : str, optional
      The label for the y-axis, typically representing the `value_column`. Defaults to 'Open'.
      
  title : str, optional
      The title of the plot. Defaults to 'Time Series Plot'.
      
  start_date : str, optional
      The start date for the plot data range. If specified, the plot will only include data from this date onwards.
      The date should be in a string format that pandas can parse into a datetime object. Defaults to None.
      
  end_date : str, optional
      The end date for the plot data range. If specified, the plot will only include data up to this date.
      The date should be in a string format that pandas can parse into a datetime object. Defaults to None.
      
  periods : int, optional
      Determines the granularity of the x-axis ticks, specifically how many major ticks are displayed.
      Defaults to 5.

  Returns:
  -------
  None
      The function creates a plot and does not return any value.
  """

  dataframe['date'] = pd.to_datetime(dataframe['date'])
  
  if start_date is None:
      start_date = dataframe['date'].min()
  else:
      start_date = pd.to_datetime(start_date)
  
  if end_date is None:
      end_date = dataframe['date'].max()
  else:
      end_date = pd.to_datetime(end_date)
  
  mask = (dataframe['date'] >= start_date) & (dataframe['date'] <= end_date)
  df_filtered = dataframe.loc[mask]
  
  df_sorted = df_filtered.sort_values('date', ascending=True)
  
  fig, ax = plt.subplots(figsize=figsize, layout='constrained')
  ax.plot(df_sorted['date'], df_sorted[value_column], label=value_column)
  
  ax.xaxis.set_major_locator(mdates.AutoDateLocator())
  ax.xaxis.set_minor_locator(mdates.AutoDateLocator())
  
  dates_to_show = [start_date, end_date] + list(pd.date_range(start=start_date, end=end_date, periods=periods))[1:-1]
  ax.set_xticks(dates_to_show)
  ax.set_xticklabels([date.strftime('%Y-%m-%d') for date in dates_to_show], rotation=tick_rotation, ha="right")

  plt.tight_layout()
  sns.despine()
  
  plt.xlabel(xlabel)
  plt.ylabel(ylabel)
  plt.title(title)
  
  plt.show()