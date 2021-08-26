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
                    
                     { filteredArr.map((el, index)=>{
                            return <tr>
                                  <td>{index+1}</td>
                                  <td>{el.name}</td>
                                  <td>Rs {el.price}</td>
                                  <td>{el.qty}</td>
                                  <td>Rs {el.qty*el.price}</td>
                            </tr>
                       })
                     }

                </tbody>
            </table>
        </>
    );
}

export default Cart;