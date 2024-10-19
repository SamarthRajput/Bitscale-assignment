import { Badge } from "./Badge";
import { Badge2 } from "./Badge2";

export function GrowthCard2(){
    return <div className="growth-card-2">
        <div className="content">

            <div className="pricing-and-heading2">
                <div className="frame-90">
                    <div className="heading3">Booster</div>
                    <Badge2 />
                </div>

                <div className="frame-91">
                    <div className="price2">
                        <div className="price-heading3">$499</div>
                        <div className="price-desc2">/month</div>
                    </div>

                    <div className="frame-94">
                       <Badge />

                       <div className="strike-text2">
                            $999
                       </div>
                    </div>

                </div>
            </div>

            <div className="list">

                <div className="item" >
                    <CheckCircle2 />
                    <div className='item-text4'>
                        25,000  Credits
                    </div>
                </div>

                <div className="item">
                    <CheckCircle2 />
                    <div className='item-text3'>
                        Webhook, HTTP API
                    </div>
                </div>

                <div className="item1">
                    <CheckCircle2 />
                    <div className='item-text3'>
                        Credit rollover (upto 2x plan credits)
                    </div>
                </div>

                <div className="item1">
                    <CheckCircle2 />
                    <div className='item-text3'>
                        Outbound email integrations like Instantly, Smartlead.
                    </div>
                </div>

                <div className="item1">
                    <CheckCircle2 />
                    <div className='item-text3'>
                        Dedicated 3 hours from Bitscale expert
                    </div>
                </div>

                <div className="item1">
                    <CheckCircle2 />
                    <div className='item-text3'>
                        Advanced models like Claude Sonnet
                    </div>
                </div>

                <div className="item1">
                    <CheckCircle2 />
                    <div className='item-text3'>
                        Dedicated 8 hours from Bitscale expert
                    </div>
                </div>

                <div className="item">
                    <CheckCircle2 />
                    <div className='item-text3'>
                        2 way Hubspot integration
                    </div>
                </div>

            </div>


            <div className="line2"></div>

            <div className="list2">
                <div className='list2-item'>
                    <BoldDot2 />
                    <div className='list2-text2'>
                        Unlimited leads search
                    </div>
                </div>

                <div className='list2-item'>
                    <BoldDot2 />
                    <div className='list2-text2'>
                        Fully enriched 5000 leads
                    </div>
                </div>

                <div className='list2-item'>
                    <BoldDot2 />
                    <div className='list2-text2'>
                        Personalized outreach at scale
                    </div>
                </div>
            </div>

            <div className="button-end-2">
                <div className='button-text2'>
                    <div>Continue with Growth</div>
                </div>
            </div>

        </div>
    </div>
}

function CheckCircle2(){
    return <div className="check-circle">
        <svg width="14px" height="14px" top="2.23px" left="2.23px" viewBox="0 0 18 18">
        <path d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9974 6.61385 17.0483 4.32619 15.3611 2.63893C13.6738 0.951673 11.3861 0.00262044 9 0ZM12.3363 7.8363L8.7363 11.4363C8.56753 11.605 8.33865 11.6998 8.1 11.6998C7.86136 11.6998 7.63248 11.605 7.4637 11.4363L5.6637 9.6363C5.49976 9.46655 5.40905 9.23921 5.4111 9.00324C5.41315 8.76726 5.5078 8.54153 5.67467 8.37466C5.84153 8.20779 6.06727 8.11314 6.30324 8.11109C6.53922 8.10904 6.76656 8.19976 6.9363 8.3637L8.1 9.5274L11.0637 6.5637C11.2334 6.39976 11.4608 6.30904 11.6968 6.31109C11.9327 6.31314 12.1585 6.40779 12.3253 6.57466C12.4922 6.74153 12.5869 6.96726 12.5889 7.20324C12.591 7.43921 12.5002 7.66656 12.3363 7.8363Z" fill="#FFFFFF"/>
        </svg>
    </div>
}

function BoldDot2(){
    return <div className="bold-dot2">
        &#x2022;
    </div>
}