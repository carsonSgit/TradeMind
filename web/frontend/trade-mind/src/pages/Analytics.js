import DataPlot from "../components/DataPlot";
import './Analytics.css';

export default function Analytics() {
    return (
        <>
            <div className='analytics-title'> Analytics </div>
            <div className='analytics-text'>
                <p>
                    We are working on our AI model at the moment, but soon you will be able to see stock analytics for every stock
                    in the S&P 500. You will be able to access the full potential of our TradeMind AI to better your knowledge & allow you
                    to make more informed decisions!
                </p>
                <p>
                    Stocks are a great way to invest your money, but it can be hard to know which stocks to invest in and when to make that
                    investment! We are here to help you with that.
                </p>
            </div>
            <DataPlot />
        </>
    )
}
