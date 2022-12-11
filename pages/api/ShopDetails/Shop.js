import { ShopDetails } from "../../../data/ShopDetails";

export default function handlera(req,res){
    res.status(200).json(ShopDetails);
    


}