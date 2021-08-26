import { useSelector } from "react-redux";

let Cart = () => {

    let state = useSelector(state=>state)
    console.log(state);

    let filteredArr = state.filter((el) => el.qty > 0);

    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </>
    );
}

export default Cart;