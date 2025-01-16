/**
 * Represents the structure of data required for the PriceHistoryChart component.
 */
export interface PriceHistoryChartData {
    /**
     * The name of the stock (e.g., "Apple").
     */
    stockName: string;

    /**
     * The stock ticker symbol (e.g., "AAPL").
     */
    stockSymbol: string;

    /**
     * The currency code in which the stock is traded (e.g., "USD", "EUR").
     */
    currency: string;

    /**
     * Available timespan options for the chart (e.g., ["1D", "1W", "1M", "1Y", "5Y"]).
     */
    timeSpans: string[];

    /**
     * Historical price data for the stock.
     */
    priceHistory: {
        /**
         * The timestamp (in milliseconds) representing the date and time of the price.
         */
        timestamp: number;

        /**
         * The stock price at the given timestamp.
         */
        price: number;
    }[];

    /**
     * The absolute price change over the selected timespan (e.g., +5.45).
     */
    changeAmount: number;

    /**
     * The percentage price change over the selected timespan (e.g., +2.18).
     */
    changePercentage: number;
}

/**
 * Mock data for the PriceHistoryChart component.
 * Used for development and testing purposes.
 */
export const mockPriceHistoryChartData: PriceHistoryChartData = {
    stockName: "Apple", // Example: Apple stock
    stockSymbol: "AAPL", // Example: AAPL ticker
    currency: "USD", // Example: USD currency
    timeSpans: ["1 Day", "1 Week", "1 Month", "1 Year", "5 Years"], // Timespan options
    priceHistory: [
        { timestamp: 1746153600000, price: 30.95 },
        { timestamp: 1746240000000, price: 31.34 },
        { timestamp: 1746326400000, price: 31.18 },
        { timestamp: 1746412800000, price: 31.05 },
        { timestamp: 1746672000000, price: 31.0 },
        { timestamp: 1746758400000, price: 30.95 },
        { timestamp: 1746844800000, price: 31.24 },
        { timestamp: 1746931200000, price: 31.29 },
        { timestamp: 1747017600000, price: 31.85 },
        { timestamp: 1747276800000, price: 31.86 },
        { timestamp: 1747363200000, price: 32.28 },
        { timestamp: 1747449600000, price: 32.1 },
        { timestamp: 1747536000000, price: 32.65 },
        { timestamp: 1747622400000, price: 32.21 },
        { timestamp: 1747881600000, price: 32.35 },
        { timestamp: 1747968000000, price: 32.44 },
        { timestamp: 1748054400000, price: 32.46 },
        { timestamp: 1748140800000, price: 32.86 },
        { timestamp: 1748227200000, price: 32.75 },
        { timestamp: 1748572800000, price: 32.54 },
        { timestamp: 1748659200000, price: 32.33 },
        { timestamp: 1748745600000, price: 32.97 },
        { timestamp: 1748832000000, price: 33.41 },
        { timestamp: 1749091200000, price: 33.27 },
        { timestamp: 1749177600000, price: 33.27 },
        { timestamp: 1749264000000, price: 32.89 },
        { timestamp: 1749350400000, price: 33.1 },
        { timestamp: 1749436800000, price: 33.73 },
        { timestamp: 1749696000000, price: 33.22 },
        { timestamp: 1749782400000, price: 31.99 },
        { timestamp: 1749868800000, price: 32.41 },
        { timestamp: 1749955200000, price: 33.05 },
        { timestamp: 1750041600000, price: 33.64 },
        { timestamp: 1750300800000, price: 33.56 },
        { timestamp: 1750387200000, price: 34.22 },
        { timestamp: 1750473600000, price: 33.77 },
        { timestamp: 1750560000000, price: 34.17 },
        { timestamp: 1750646400000, price: 33.82 },
        { timestamp: 1750905600000, price: 34.51 },
        { timestamp: 1750992000000, price: 33.16 },
        { timestamp: 1751078400000, price: 33.56 },
        { timestamp: 1751164800000, price: 33.71 },
        { timestamp: 1751251200000, price: 33.81 },
        { timestamp: 1751506800000, price: 34.4 },
        { timestamp: 1751593200000, price: 34.63 },
        { timestamp: 1751679600000, price: 34.46 },
        { timestamp: 1751766000000, price: 34.48 },
        { timestamp: 1751852400000, price: 34.31 },
        { timestamp: 1752111600000, price: 34.7 },
        { timestamp: 1752198000000, price: 34.31 },
        { timestamp: 1752284400000, price: 33.46 },
        { timestamp: 1752370800000, price: 33.59 },
        { timestamp: 1752716400000, price: 33.22 },
        { timestamp: 1752802800000, price: 32.61 },
        { timestamp: 1752889200000, price: 33.01 },
        { timestamp: 1752975600000, price: 33.55 },
        { timestamp: 1753062000000, price: 33.18 },
        { timestamp: 1753321200000, price: 32.84 },
        { timestamp: 1753407600000, price: 33.84 },
        { timestamp: 1753494000000, price: 33.39 },
        { timestamp: 1753580400000, price: 32.91 },
        { timestamp: 1753666800000, price: 33.06 },
        { timestamp: 1753926000000, price: 32.62 },
        { timestamp: 1754012400000, price: 32.4 },
        { timestamp: 1754098800000, price: 33.13 },
        { timestamp: 1754185200000, price: 33.26 },
        { timestamp: 1754271600000, price: 33.58 },
    ],
    changeAmount: 5.24, // Example price change over selected timespan
    changePercentage: 4.18, // Example percentage change over selected timespan
};

