import { Badge } from "./Badge";
import { Badge2 } from "./Badge2";
import { BoldDot } from "./BoldDot";
import { CheckCircle } from "./CheckCircle";

export function GrowthCard2(){
    return <div className="growth-card-2">
        <div className="content">

            <div className="pricing-and-heading2">
                <div className="frame-93">
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
                    <CheckCircle />
                    <div className='item-text4'>
                        25,000  Credits
                    </div>
                </div>

                <div className="item">
                    <CheckCircle />
                    <div className='item-text3'>
                        Webhook, HTTP API
                    </div>
                </div>

                <div className="item1">
                    <CheckCircle />
                    <div className='item-text3'>
                        Credit rollover (upto 2x plan credits)
                    </div>
                </div>

                <div className="item1">
                    <CheckCircle />
                    <div className='item-text3'>
                        Outbound email integrations like Instantly, Smartlead.
                    </div>
                </div>

                <div className="item1">
                    <CheckCircle />
                    <div className='item-text3'>
                        Dedicated 3 hours from Bitscale expert
                    </div>
                </div>

                <div className="item1">
                    <CheckCircle />
                    <div className='item-text3'>
                        Advanced models like Claude Sonnet
                    </div>
                </div>

                <div className="item1">
                    <CheckCircle />
                    <div className='item-text3'>
                        Dedicated 8 hours from Bitscale expert
                    </div>
                </div>

                <div className="item">
                    <CheckCircle />
                    <div className='item-text3'>
                        2 way Hubspot integration
                    </div>
                </div>

            </div>


            <div className="line2"></div>

            <div className="list2">
                <div className='list2-item'>
                    <BoldDot />
                    <div className='list2-text2'>
                        Unlimited leads search
                    </div>
                </div>

                <div className='list2-item'>
                    <BoldDot />
                    <div className='list2-text2'>
                        Fully enriched 5000 leads
                    </div>
                </div>

                <div className='list2-item'>
                    <BoldDot />
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