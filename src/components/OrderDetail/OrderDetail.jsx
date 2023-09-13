import LineItem from '../LineItem/LineItem';

export default function OrderDetail({order, handleChangeQty, handleCheckout}) {
    if (!order) return null;

    const lineItems = order.lineItems.map(item => {
        <LineItem
            lineItems={item}
            isPaid={order.isPaid}
            handleChangeQty={handleChangeQty}
            key={item._id}
        />
    });

    return (
        <div className='OrderDetail'>
            <div className='sectionHeading'>
                {order.isPaid ? <span>Order<span className='smaller'> {order.orderId}</span></span>}
                <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
            </div>
        </div>

        <div className='lineItemContainer flex-ctr-ctr flex-col scroll-y'>
            {lineItems.length ? 
                
            }
        </div>
    )
}