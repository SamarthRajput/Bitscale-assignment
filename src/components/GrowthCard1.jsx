import { Badge } from "./Badge";
import { CheckCircle } from './CheckCircle.jsx'
import { BoldDot } from './BoldDot.jsx'

export function GrowthCard1(){
    return <div className="growth-card">
        <div className="content">

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

            <div className="list">

                <div className="item" >
                    <CheckCircle />
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

            <div className="line"></div>

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
                        Personalized outreach at scale
                    </div>
                </div>
            </div>

            <div className="button-end">
                <div className='button-text'>
                    <div>Continue with Booster</div>
                </div>
            </div>

        </div>
    </div>
}