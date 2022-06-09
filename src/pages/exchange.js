import React, { Component } from 'react';
import HistoryOrder from '../components/HistoryOrder';
import MarketHistory from '../components/MarketHistory';
import MarketNews from '../components/MarketNews';
import MarketPairs from '../components/MarketPairs';
import MarketTrade from '../components/MarketTrade';
import OrderBook from '../components/OrderBook';
import TradingChart from '../components/TradingChart';
import TradingChartDark from '../components/TradingChartDark';
import { ThemeConsumer } from '../context/ThemeContext';

import TradeViewChart from '../components/tradeChart/TradeViewChart';
import {CrosshairMode, LineStyle} from "lightweight-charts";
import {condleStickDefaultConfig, histogramDefaultConfig} from "../components/tradeChart/utils/constants";

export default class exchange extends Component {
  render() {
    return (
      <>
        <div className="container-fluid mtb15 no-fluid">
          <div className="row sm-gutters">
            <div className="col-sm-12 col-md-3">
              <MarketPairs />
            </div>
            <div className="col-sm-12 col-md-6">
              <ThemeConsumer>
                {({ data }) => {
                  return data.theme === 'light' ? (
                    //<TradingChart />
                      <div className="tradeChartWrapper">
                        <TradeViewChart
                            pair="BTCUSDT" interval={''}
                            candleStickConfig={condleStickDefaultConfig}
                            histogramConfig={histogramDefaultConfig}
                            chartLayout={{
                              layout: {
                                backgroundColor: "#ededed",
                                textColor: "#253248",
                              },
                              grid: {
                                vertLines: {
                                  color: "#838fa3",
                                  style: LineStyle.SparseDotted,
                                },
                                horzLines: {
                                  color: "#838fa3",
                                  style: LineStyle.SparseDotted,
                                },
                              },
                              crosshair: {
                                mode: CrosshairMode.Normal,
                              },
                              priceScale: {
                                borderColor: "#485c7b",
                              },
                              timeScale: {
                                borderColor: "#485c7b",
                                timeVisible: true,
                                secondsVisible: false,
                              },
                            }}/>
                      </div>
                  ) : (
                    <TradingChartDark />
                  );
                }}
              </ThemeConsumer>
              <MarketTrade />
            </div>
            <div className="col-md-3">
              <OrderBook />
              <MarketHistory />
            </div>
            <div className="col-md-3">
              <MarketNews />
            </div>
            <div className="col-md-9">
              <HistoryOrder />
            </div>
          </div>
        </div>
      </>
    );
  }
}
