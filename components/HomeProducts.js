// import { ProductContext } from "@/Context/CreateProduct";
// import Image from "next/image";
// import Link from "next/link";
// import { useContext } from "react";
// import CardSkeleton from "./CardSkeleton";

// const HomeProducts = ({ show }) => {
//   // const { products } = useContext(ProductContext);

//   const products = {
//     "status": 200,
//     "message": "Products fetched successfully",
//     "data": [
//       {
//         "_id": "65967f91d78e8905f0e513d9",
//         "name": "Boys Colorblock Casual Jacket",
//         "description": "Color\nMulticolor\nFabric\nPolyester\nPattern\nColorblock\nStyle code\nARMYJACKET\nIdeal for\nBoys\nSleeve\nFull Sleeve\nClosure\nZipper\nSales package\n1 JACKET",
//         "price": 347,
//         "category": "Kids",
//         "size": [
//           "Small",
//           "Medium",
//           "Large",
//           "Extra Large"
//         ],
//         "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704361828436-5-6-years-no-jacket-army-wrapsters-original-imag8bytynuxtsy4.webp?alt=media&token=533fa29d-3648-4911-9ae1-e18df80887da",
//         "__v": 0
//       },
//       {
//         "_id": "65968022d78e8905f0e513dd",
//         "name": "Men Full Sleeve Printed Hooded Sweatshirt",
//         "description": "Color\nBlack\nFabric\nCotton Blend\nPattern\nPrinted\nNeck\nHooded Neck\nSleeve\nFull Sleeve\nStyle Code\nTBLHDFULSWEAT-ST114\nHooded\nYes\nReversible\nNo",
//         "price": 398,
//         "category": "Men",
//         "size": [
//           "Small",
//           "Medium",
//           "Large",
//           "Extra Large"
//         ],
//         "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704361992461-xl-tblhdfulsweat-st114-tripr-original-imagwy83cawff5h9.webp?alt=media&token=eff6cba3-c8c9-4b3f-bdcb-d8e9ad7d6e90",
//         "__v": 0
//       },
//       {
//         "_id": "6596805bd78e8905f0e513df",
//         "name": "Jesal Self Design Men Muffler",
//         "description": "Fabric\nWool Blend\nPattern\nSelf Design\nColor\nBlack",
//         "price": 149,
//         "category": "Men",
//         "size": [
//           "Small",
//           "Medium",
//           "Large",
//           "Extra Large"
//         ],
//         "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704362036827-free-woolen-winter-beanie-cap-with-neck-set-scarf-for-men-jesal-original-imagjyqzakmkexgk.webp?alt=media&token=d26fa89c-fcdb-4d72-ac0f-e5392f5cbd77",
//         "__v": 0
//       },
//       {
//         "_id": "65968094d78e8905f0e513e1",
//         "name": "Men Full Sleeve Self Design Sweatshirt",
//         "description": "Color\nYellow\nFabric\nPolycotton\nPattern\nSelf Design\nNeck\nRound Neck\nSleeve\nFull Sleeve\nStyle Code\nPUSTUSLFI26239\nHooded\nNo\nReversible\nNo",
//         "price": 911,
//         "category": "Men",
//         "size": [
//           "Small",
//           "Medium",
//           "Large",
//           "Extra Large"
//         ],
//         "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704362103731--original-imagu94dvxtwhhzr.webp?alt=media&token=82224107-f2a2-490f-b948-76ab06a0dadf",
//         "__v": 0
//       },
//       {
//         "_id": "659680d3d78e8905f0e513e5",
//         "name": "Men Full Sleeve Printed Hooded Sweatshirt",
//         "description": "Color\nBlack, White\nFabric\nCotton Blend\nPattern\nPrinted\nNeck\nHooded Neck\nSleeve\nFull Sleeve\nStyle Code\nTBLHDFULSWEAT-K34\nOccasion\nCasual\nHooded\nYes",
//         "price": 599,
//         "category": "Men",
//         "size": [
//           "Small",
//           "Medium",
//           "Large",
//           "Extra Large"
//         ],
//         "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704362173684-xl-tblhdfulsweat-k34-tripr-original-imagtzyafggzheg2.webp?alt=media&token=5415b120-cc69-4c5d-96be-54906620559d",
//         "__v": 0
//       },
//       {
//         "_id": "6596811fd78e8905f0e513e7",
//         "name": "Men Full Sleeve Printed Hooded Sweatshirt",
//         "description": "Color\nBlue\nFabric\nCotton Blend\nPattern\nPrinted\nNeck\nRound Neck\nSleeve\nFull Sleeve\nStyle Code\n8107-LG\nOccasion\nCasual\nHooded\nYes",
//         "price": 295,
//         "category": "Men",
//         "size": [
//           "Small",
//           "Medium",
//           "Large",
//           "Extra Large"
//         ],
//         "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704362228626-xl-8107-lg-lggarments-original-imagzhhsw4xkactm.webp?alt=media&token=c5c2db96-e176-4d86-bb2c-02d94c74dcb0",
//         "__v": 0
//       },
//       {
//         "_id": "65968179d78e8905f0e513e9",
//         "name": "Self Design Bollywood Net Saree  (Red)",
//         "description": "Style Code\nBrasoSari2.0\nPattern\nSelf Design\nPack of\n1\nOccasion\nWedding, Casual, Party & Festive\nDecorative Material\nBeads, Lace\nFabric Care\nDry Clean Only",
//         "price": 459,
//         "category": "Women",
//         "size": [
//           "Small",
//           "Medium",
//           "Large",
//           "Extra Large"
//         ],
//         "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704362325856-free-braso2-o-combo-lorofy-unstitched-original-imagkymbfmjbfeqj.webp?alt=media&token=5de88780-c7f3-485d-bb06-00201e812153",
//         "__v": 0
//       },
//       {
//         "_id": "6596819fd78e8905f0e513eb",
//         "name": "Women Viscose Rayon Kurta Pant Set",
//         "description": "Fabric\nViscose Rayon\nSales Package\n1 KURTA, 1 PANT, 1 DUPTTA\nStyle Code\nKJ-RAMA SHIBHORI DUPATTA SET\nTop type\nKurta\nBottom type\nPant\nPattern\nEmbroidered\nColor\nMulticolor\nOccasion\nFestive & Party",
//         "price": 699,
//         "category": "Women",
//         "size": [
//           "Small",
//           "Medium",
//           "Large",
//           "Extra Large"
//         ],
//         "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704362373691-l-kj-rama-shibhori-dupatta-set-kjfab-original-imaguu6pqs8srm7e.webp?alt=media&token=add5dfb6-2dac-444c-9fb8-4bc9fac0eac8",
//         "__v": 0
//       },
//       {
//         "_id": "659681d1d78e8905f0e513ed",
//         "name": "Women Printed Cotton Blend A-line Kurta  (Pink)",
//         "description": "Ideal For\nWomen\nLength Type\nCalf Length\nBrand Color\nRANI\nOccasion\nCasual\nPattern\nPrinted\nType\nA-line\nFabric\nCotton Blend\nStyle\nFRONT SLIT",
//         "price": 499,
//         "category": "Women",
//         "size": [
//           "Small",
//           "Medium",
//           "Large",
//           "Extra Large"
//         ],
//         "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704362430178-xxl-psk103-glorious-original-imaftnbjjzfgxzej-bb.webp?alt=media&token=9d5d2f12-5e39-4218-b206-f4599072ef4a",
//         "__v": 0
//       },
//       {
//         "_id": "659681f8d78e8905f0e513ef",
//         "name": "Printed Bollywood Brasso, Chiffon Saree  (Orange)",
//         "description": "Style Code\nAS710\nPattern\nPrinted\nPack of\n1\nOccasion\nCasual, Party & Festive\nFabric Care\nHand Wash\nOther Details\nSaree Fabric : Chiffon, Blouse Fabric : Silk, Saree Length : 5.50 Mtr, Width : 42\" Inch, Blouse Piece Length : 0.75 Mtr\nFabric\nBrasso, Chiffon\nType\nBollywood",
//         "price": 649,
//         "category": "Women",
//         "size": [
//           "Small",
//           "Medium",
//           "Large",
//           "Extra Large"
//         ],
//         "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704362462810-free-as710-anjanisut-sarees-unstitched-original-imag9kqsswqxn2ux.webp?alt=media&token=464f6df5-2954-4ddc-bc09-e4730e2e5f86",
//         "__v": 0
//       },
//       {
//         "_id": "65968223d78e8905f0e513f1",
//         "name": "Women Striped Viscose Rayon Straight Kurta  (Light Blue, White)",
//         "description": "Ideal For\nWomen\nLength Type\nCalf Length\nBrand Color\nCYAN BLUE\nOccasion\nCasual\nPattern\nStriped\nType\nStraight\nFabric\nViscose Rayon\nNeck\nRound Neck",
//         "price": 369,
//         "category": "Women",
//         "size": [
//           "Small",
//           "Medium",
//           "Large",
//           "Extra Large"
//         ],
//         "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704362504122-s-mor0002-morpunkhi-original-imagfgu3gqfuyzeh.webp?alt=media&token=26c5cc37-e3bc-40b0-bf9e-7e1ca56a5697",
//         "__v": 0
//       },
//       {
//         "_id": "65968253d78e8905f0e513f3",
//         "name": "Women Cotton Silk Kurti Trouser Set",
//         "description": "Fabric\nCotton Silk\nType\nKurta, Pant And Dupatta Set\nSales Package\n1 Top, 1 Trouser, 1 Dupatta\nStyle Code\nVV-9344\nLining material\nSilk\nTop fabric\nCotton Blend\nBottom fabric\nSilk\nTop type\nKurti",
//         "price": 799,
//         "category": "Women",
//         "size": [
//           "Small",
//           "Medium",
//           "Large",
//           "Extra Large"
//         ],
//         "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704362556634-3xl-vv-9344-vredevogel-original-imagh6czajmrupsa.webp?alt=media&token=fceed574-d16e-4d7a-a61b-cf50da727be2",
//         "__v": 0
//       }
//     ]
//   }

//   if (!products?.data) {
//     return (
//       <div
//         className={`bg-white mx-auto ${show ? "w-full lg:w-10/12" : "w-full"}`}
//       >
//         <CardSkeleton />
//       </div>
//     );
//   }
//   return (
//     <div>
//       <div className={`bg-white mx-auto ${show ? "w-10/12" : "w-full"}`}>
//         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full lg:px-8">
//           <h2 className="sr-only">Products</h2>

//           <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
//             {show
//               ? products?.data
//                 ?.slice(-4)
//                 .map((product, key) => (
//                   <div key={key}>
//                     <div className="aspect-h-1 aspect-w-1 w-full  md:h-5/6 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
//                       <Image
//                         width={500}
//                         height={400}
//                         src={product?.mainImage}
//                         alt={product?.name}
//                         className="h-full w-full object-cover object-center group-hover:opacity-75"
//                       />
//                     </div>
//                     <h3 className="mt-4 text-sm text-gray-700">
//                       {product?.name}
//                     </h3>
//                   </div>

//                 ))
//                 .reverse()
//               : products?.data?.map((product) => (
//                 <Link
//                   href={`/products/${product?._id}`}
//                   key={product?._id}
//                   className="group"
//                 >
//                   <div className="aspect-h-1 aspect-w-1 w-full  md:h-3/4 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
//                     <Image
//                       width={300}
//                       height={300}
//                       src={product?.mainImage}
//                       alt={product?.name}
//                       className="h-full w-full object-cover object-center group-hover:opacity-75"
//                     />
//                   </div>
//                   <h3 className="mt-4 text-sm text-gray-700">
//                     {product?.name}
//                   </h3>
//                   <p className="mt-1 text-lg font-medium text-gray-900">
//                     ₹{product?.price}
//                   </p>
//                 </Link>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeProducts;
