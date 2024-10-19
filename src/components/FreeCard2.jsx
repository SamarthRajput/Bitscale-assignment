import { BoldDot } from "./BoldDot";
import { CheckCircle } from "./CheckCircle";

export function FreeCard2(){
    return <div className="free-card">
        <div className="content">

            <div className="pricing-and-heading">

                <div className="pricing-card-header">
                    <div className="heading">Enterprise</div>
                </div>

                <div className="frame-92">
                    <div className="price">
                        <div className="price-heading">Contact Us</div>
                    </div>

                    <div className="feature-label">For individual pricing</div>
                </div>

            </div>

            <div className="list">
                <div className="item">
                    <CheckCircle />
                    <div className="item-text">
                        Data privacy certification
                    </div>
                </div>

                <div className="item">
                    <CheckCircle />
                    <div className='item-text'>
                        Priority Support
                    </div>
                </div>

                <div className="item">
                    <CheckCircle />
                    <div className='item-text'>
                        Dedicated Bitscale expert
                    </div>
                </div>

                <div className="item">
                    <CheckCircle />
                    <div className='item-text'>
                        Private Slack Channel
                    </div>
                </div>

                <div className="item1">
                <CheckCircle />
                <div className='item-text'>
                    Collaborative workspace and templates
                </div>
                </div>

            </div>

            <div className="line"></div>

            <div className="list2">
                <div className='list2-item'>
                    <BoldDot />
                    <div className='list2-text'>
                        Perfect for High-Volume End-to-End CRM Data Enrichment
                    </div>
                </div>

                <div className='list2-item'>
                    <BoldDot />
                    <div className='list2-text'>
                        Unlimited list of leads with unlimited data points
                    </div>
                </div>
            </div>

            <div className="button-end">
    <div className='button-text'>
        <div>Try Now</div>
    </div>
            </div>

        </div>
    </div>
}