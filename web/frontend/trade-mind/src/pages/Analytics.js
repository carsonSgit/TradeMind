import DataPlot from "../components/DataPlot";
import './Analytics.css';

export default function Analytics() {
    return (
        <>
            <div className='analytics-title'> Analytics </div>
            <div className='text'>
                <p>We're currently working on enhancing this page to provide valuable analytics insights.</p>
                <p>Stay tuned for updates!</p>
            </div>
            <DataPlot />
        </>
    )
}