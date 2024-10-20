import { BoldDot } from './BoldDot.jsx'
import { CheckCircle } from './CheckCircle.jsx'
export function FreeCard1(){
    return <div className="free-card">
        <div className="content">

            {/* Pricing and Heading of the free card */}
            <div className="pricing-and-heading">

                <div className="pricing-card-header">
                    <div className="heading">Trial</div>
                </div>

                <div className="frame-92">
                    <div className="price">
                        <div className="price-heading">Try now</div>
                    </div>

                    <div className="feature-label">Get personalised template</div>
                </div>

            </div>

            {/* The 1st list of the free card */}
            <div className="list">
                <div className="item">
                    <CheckCircle ></CheckCircle>
                    
                    <div className="item-text">
                        25+ data sources
                    </div>

                </div>

                <div className="item">
                    <CheckCircle />
                    <div className='item-text'>
                        GPT4, LinkedIn and others
                    </div>
                </div>

                <div className="item">
                    <CheckCircle />
                    <div className='item-text'>
                        Access to slack community
                    </div>
                </div>

                <div className="item1">
                    <CheckCircle />
                    <div className='item-text'>
                        10+ templates to scale your outbound
                    </div>
                </div>

            </div>

            {/* Coloured line in the free card */}
            <div className="line"></div>

             {/* The 2nd list of the free card */}
            <div className="list2">
                <div className='list2-item'>
                    <BoldDot />
                    <div className='list2-text'>
                        Explore product capabilities
                    </div>
                </div>
            </div>

            {/* The button at the end of the free card  */}
            <div className="button-end">
                <div className='button-text'>
                    <div>Try Now</div>
                </div>
            </div>

        </div>
    </div>
}