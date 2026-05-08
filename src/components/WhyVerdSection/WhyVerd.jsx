import React from 'react';
import './whyverd.css';
import download from '../../assets/images/download.png'
import grow from '../../assets/images/grow.png'
import wallet from '../../assets/images/wallet.png'
import currency from '../../assets/images/currency.png'
import check from '../../assets/images/check.png'
import chart from '../../assets/images/chart.png'

const WhyVerd = () => {
  return (
    <div className="why-container" id='why-verd'>
            <div className="why-text-container">
                <div className="why-main-text">
                    <span>Why Verd Exists</span>
                </div>
                <div className="why-sub-text">
                    <span>Your money should be doing more, Verd bridges traditional finance and DeFi, giving you a simple system to save, grow and access your money.</span>
                </div>
            </div>

            <div className="why-bentos">
                <div className="why-cards-container">

                    {/* DESKTOP SVG ARROWS */}
                    <svg className="arrows-svg" viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                <path d="M 0 0 L 6 3 L 0 6 Z" fill="#000" />
                            </marker>
                        </defs>

                        {/* Arrow from Deposit (card-1) to Grow (card-2) */}
                        <path
                           d="M 220 150 C 220 220, 120 320, 328 260"
                            fill="none"
                            stroke="#2E7D52"
                            strokeWidth="1.8"
                            strokeDasharray="6 4"
                            markerEnd="url(#arrowhead)"
                        />

                        {/* Arrow from Grow (card-2) to Access (card-3) */}
                        <path
                            d="M 500 220 C 450 180, 650 400, 660 170"
                            fill="none"
                            stroke="#2E7D52"
                            strokeWidth="1.8"
                            strokeDasharray="6 4"
                            markerEnd="url(#arrowhead)"
                        />
                    </svg>

                    <div className="why-cards card-1">
                        <div className="icon-text-content">
                            <div className="why-icon">
                            <img src={download} alt="" />
                        </div>

                        <div className="why-card-texts">
                            <div className="cards-main-text">
                                <span>Deposit</span>
                            </div>
                            <div className="cards-sub-text">
                                <span>Deposit in fiat or crypto with ease</span>
                            </div>
                        </div>
                        </div>
                        
                        <div className="why-cards-img img-left">
                            <img src={currency} alt="" />
                        </div>
                    </div>

                    <div className="why-cards card-2">
                        <div className="icon-text-content">
                            <div className="why-icon">
                            <img src={grow} alt="" />
                        </div>

                        <div className="why-card-texts">
                            <div className="cards-main-text">
                                <span>Grow</span>
                            </div>
                            <div className="cards-sub-text">
                                <span>Structured DeFi systems for steady growth.</span>
                            </div>
                        </div>
                        
                        </div>
                        
                        <div className="why-cards-img img-center">
                            <img src={chart} alt="" />
                        </div>
                    </div>

                    <div className="why-cards card-3">
                        <div className="icon-text-content">
                            <div className="why-icon">
                            <img src={wallet} alt="" />
                        </div>

                        <div className="why-card-texts">
                            <div className="cards-main-text">
                                <span>Access</span>
                            </div>
                            <div className="cards-sub-text">
                                <span>Withdraw anytime, your way</span>
                            </div>
                        </div>
                        </div>
                        
                        <div className="why-cards-img img-right">
                            <img src={check} alt="" />
                        </div>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default WhyVerd