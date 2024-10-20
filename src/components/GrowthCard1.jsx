import { Badge } from "./Badge";
import { CheckCircle } from './CheckCircle.jsx'
import { BoldDot } from './BoldDot.jsx'

export function GrowthCard1(){
    return <div className="growth-card">
        <div className="content">

            {/* Pricing and Heading of the growth card */}
            <div className="pricing-and-heading2">

                <div className="frame-93">
                    <div className="heading2">Growth</div>
                </div>

                <div className="frame-91">
                    <div className="price2">
                        <div className="price-heading2">$229</div>
                        <div className="price-desc">/month</div>
                    </div>

                    <div className="frame-94">
                       <Badge />

                       <div className="strike-text">
                            $459
                       </div>
                    </div>

    
                </div>

            </div>

            {/* The 1st list of the growth card */}
            <div className="list3">

                <div className="item" >
                    <CheckCircle3 />
                    <div className='item-text2'>
                        8,000  Credits
                    </div>
                </div>

                <div className="item">
                    <CheckCircle />
                    <div className='item-text'>
                        Webhook, HTTP API
                    </div>
                </div>

                <div className="item1">
                    <CheckCircle />
                    <div className='item-text'>
                        Credit rollover (upto 2x plan credits)
                    </div>
                </div>

                <div className="item1">
                    <CheckCircle />
                    <div className='item-text'>
                        Outbound email integrations like Instantly, Smartlead.
                    </div>
                </div>

                <div className="item1">
                    <CheckCircle />
                    <div className='item-text'>
                        Dedicated 3 hours from Bitscale expert
                    </div>
                </div>
            </div>

            {/* Coloured line in the growth card */}
            <div className="line"></div>

            {/* The 2nd list of the growth card */}
            <div className="list2">
                <div className='list2-item'>
                    <BoldDot />
                    <div className='list2-text'>
                        Unlimited leads search
                    </div>
                </div>

                <div className='list2-item'>
                    <BoldDot />
                    <div className='list2-text'>
                        Fully enriched 5000 leads
                    </div>
                </div>

                <div className='list2-item'>
                    <BoldDot />
                    <div className='list2-text'>
                    Personalized outreach at <br/> scale
                    </div>
                </div>
            </div>

            {/* The button at the end of the growth card  */}
            <div className="button-end">
                <div className='button-text'>
                    <div>Continue with Booster</div>
                </div>
            </div>

        </div>
    </div>
}

function CheckCircle3(){
    return <div className="check-circle">
        <svg width="14px" height="14px" top="2.23px" left="2.23px" viewBox="0 0 18 18" fill="none">
        <path d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9974 6.61385 17.0483 4.32619 15.3611 2.63893C13.6738 0.951673 11.3861 0.00262044 9 0ZM12.3363 7.8363L8.7363 11.4363C8.56753 11.605 8.33865 11.6998 8.1 11.6998C7.86136 11.6998 7.63248 11.605 7.4637 11.4363L5.6637 9.6363C5.49976 9.46655 5.40905 9.23921 5.4111 9.00324C5.41315 8.76726 5.5078 8.54153 5.67467 8.37466C5.84153 8.20779 6.06727 8.11314 6.30324 8.11109C6.53922 8.10904 6.76656 8.19976 6.9363 8.3637L8.1 9.5274L11.0637 6.5637C11.2334 6.39976 11.4608 6.30904 11.6968 6.31109C11.9327 6.31314 12.1585 6.40779 12.3253 6.57466C12.4922 6.74153 12.5869 6.96726 12.5889 7.20324C12.591 7.43921 12.5002 7.66656 12.3363 7.8363Z" fill="#1A56DB"/>
        </svg>
    </div>
}