"use client";
import CardSkeleton from "@/components/CardSkeleton";
import Image from "next/image";
import { useEffect, useState } from "react";

const Category = ({ params }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const kidsData = {
        "status": "success",
        "data": [
          {
            "_id": "65967f91d78e8905f0e513d9",
            "name": "Boys Colorblock Casual Jacket",
            "description": "Color\nMulticolor\nFabric\nPolyester\nPattern\nColorblock\nStyle code\nARMYJACKET\nIdeal for\nBoys\nSleeve\nFull Sleeve\nClosure\nZipper\nSales package\n1 JACKET",
            "price": 347,
            "category": "Kids",
            "size": [
              "Small",
              "Medium",
              "Large",
              "Extra Large"
            ],
            "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704361828436-5-6-years-no-jacket-army-wrapsters-original-imag8bytynuxtsy4.webp?alt=media&token=533fa29d-3648-4911-9ae1-e18df80887da",
            "__v": 0
          }, 


          {
            "_id": "65967f91d78e8905f0e513d9",
            "name": "Girls Casual Wear",
            "description": "Color\nMulticolor\nFabric\nPolyester\nPattern\nColorblock\nStyle code\nARMYJACKET\nIdeal for\nBoys\nSleeve\nFull Sleeve\nClosure\nZipper\nSales package\n1 JACKET",
            "price": 347,
            "category": "Kids",
            "size": [
              "Small",
              "Medium",
              "Large",
              "Extra Large"
            ],
            "mainImage": "/UMANG_IMAGES/image_4.jpeg", 
                "__v": 0
          }, 
          {
            "_id": "65967f91d78e8905f0e513d9",
            "name": "Girls Casual Wear",
            "description": "Color\nMulticolor\nFabric\nPolyester\nPattern\nColorblock\nStyle code\nARMYJACKET\nIdeal for\nBoys\nSleeve\nFull Sleeve\nClosure\nZipper\nSales package\n1 JACKET",
            "price": 347,
            "category": "Kids",
            "size": [
              "Small",
              "Medium",
              "Large",
              "Extra Large"
            ],
            "mainImage": "/UMANG_IMAGES/image_6.jpeg", 
                "__v": 0
          }, 

          {
            "_id": "65967f91d78e8905f0e513d9",
            "name": "Girls Casual Wear",
            "description": "Color\nMulticolor\nFabric\nPolyester\nPattern\nColorblock\nStyle code\nARMYJACKET\nIdeal for\nBoys\nSleeve\nFull Sleeve\nClosure\nZipper\nSales package\n1 JACKET",
            "price": 347,
            "category": "Kids",
            "size": [
              "Small",
              "Medium",
              "Large",
              "Extra Large"
            ],
            "mainImage": "/UMANG_IMAGES/Image_5.jpeg", 
                "__v": 0
          }, 

         

        ]
      }

      const mensData = {
        "status": "success",
        "data": [
          {
            "_id": "65968022d78e8905f0e513dd",
            "name": "Men Full Sleeve Printed Hooded Sweatshirt",
            "description": "Color\nBlack\nFabric\nCotton Blend\nPattern\nPrinted\nNeck\nHooded Neck\nSleeve\nFull Sleeve\nStyle Code\nTBLHDFULSWEAT-ST114\nHooded\nYes\nReversible\nNo",
            "price": 398,
            "category": "Men",
            "size": [
              "Small",
              "Medium",
              "Large",
              "Extra Large"
            ],
            "mainImage": "/UMANG_IMAGES/imgpsh_fullsize_anim.jpeg",
            "__v": 0
          },
         
          {
            "_id": "65968094d78e8905f0e513e1",
            "name": "Men Full Sleeve Self Design Sweatshirt",
            "description": "Color\nYellow\nFabric\nPolycotton\nPattern\nSelf Design\nNeck\nRound Neck\nSleeve\nFull Sleeve\nStyle Code\nPUSTUSLFI26239\nHooded\nNo\nReversible\nNo",
            "price": 911,
            "category": "Men",
            "size": [
              "Small",
              "Medium",
              "Large",
              "Extra Large"
            ],
            "mainImage": "/UMANG_IMAGES/image_2.jpeg",
            "__v": 0
          },
          {
            "_id": "659680d3d78e8905f0e513e5",
            "name": "Men Full Sleeve Printed Hooded Sweatshirt",
            "description": "Color\nBlack, White\nFabric\nCotton Blend\nPattern\nPrinted\nNeck\nHooded Neck\nSleeve\nFull Sleeve\nStyle Code\nTBLHDFULSWEAT-K34\nOccasion\nCasual\nHooded\nYes",
            "price": 599,
            "category": "Men",
            "size": [
              "Small",
              "Medium",
              "Large",
              "Extra Large"
            ],
            "mainImage": "/UMANG_IMAGES/imgpsh_fullsize_anim (1).jpeg",
            "__v": 0
          },
          {
            "_id": "6596805bd78e8905f0e513df",
            "name": "Jesal Self Design Men Muffler",
            "description": "Fabric\nWool Blend\nPattern\nSelf Design\nColor\nBlack",
            "price": 149,
            "category": "Men",
            "size": [
              "Small",
              "Medium",
              "Large",
              "Extra Large"
            ],
            "mainImage": "/UMANG_IMAGES/imgpsh_fullsize_anim (2).jpeg",
            "__v": 0
          },
          
        ]
      }


      const womensData = {
        "status": "success",
        "data": [
          {
            "_id": "65968179d78e8905f0e513e9",
            "name": "Self Design Bollywood Net Saree  (Red)",
            "description": "Style Code\nBrasoSari2.0\nPattern\nSelf Design\nPack of\n1\nOccasion\nWedding, Casual, Party & Festive\nDecorative Material\nBeads, Lace\nFabric Care\nDry Clean Only",
            "price": 459,
            "category": "Women",
            "size": [
              "Small",
              "Medium",
              "Large",
              "Extra Large"
            ],
            "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704362325856-free-braso2-o-combo-lorofy-unstitched-original-imagkymbfmjbfeqj.webp?alt=media&token=5de88780-c7f3-485d-bb06-00201e812153",
            "__v": 0
          },
          {
            "_id": "6596819fd78e8905f0e513eb",
            "name": "Women Viscose Rayon Kurta Pant Set",
            "description": "Fabric\nViscose Rayon\nSales Package\n1 KURTA, 1 PANT, 1 DUPTTA\nStyle Code\nKJ-RAMA SHIBHORI DUPATTA SET\nTop type\nKurta\nBottom type\nPant\nPattern\nEmbroidered\nColor\nMulticolor\nOccasion\nFestive & Party",
            "price": 699,
            "category": "Women",
            "size": [
              "Small",
              "Medium",
              "Large",
              "Extra Large"
            ],
            "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704362373691-l-kj-rama-shibhori-dupatta-set-kjfab-original-imaguu6pqs8srm7e.webp?alt=media&token=add5dfb6-2dac-444c-9fb8-4bc9fac0eac8",
            "__v": 0
          },
          {
            "_id": "659681d1d78e8905f0e513ed",
            "name": "Women Printed Cotton Blend A-line Kurta  (Pink)",
            "description": "Ideal For\nWomen\nLength Type\nCalf Length\nBrand Color\nRANI\nOccasion\nCasual\nPattern\nPrinted\nType\nA-line\nFabric\nCotton Blend\nStyle\nFRONT SLIT",
            "price": 499,
            "category": "Women",
            "size": [
              "Small",
              "Medium",
              "Large",
              "Extra Large"
            ],
            "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704362430178-xxl-psk103-glorious-original-imaftnbjjzfgxzej-bb.webp?alt=media&token=9d5d2f12-5e39-4218-b206-f4599072ef4a",
            "__v": 0
          },
          {
            "_id": "659681f8d78e8905f0e513ef",
            "name": "Printed Bollywood Brasso, Chiffon Saree  (Orange)",
            "description": "Style Code\nAS710\nPattern\nPrinted\nPack of\n1\nOccasion\nCasual, Party & Festive\nFabric Care\nHand Wash\nOther Details\nSaree Fabric : Chiffon, Blouse Fabric : Silk, Saree Length : 5.50 Mtr, Width : 42\" Inch, Blouse Piece Length : 0.75 Mtr\nFabric\nBrasso, Chiffon\nType\nBollywood",
            "price": 649,
            "category": "Women",
            "size": [
              "Small",
              "Medium",
              "Large",
              "Extra Large"
            ],
            "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704362462810-free-as710-anjanisut-sarees-unstitched-original-imag9kqsswqxn2ux.webp?alt=media&token=464f6df5-2954-4ddc-bc09-e4730e2e5f86",
            "__v": 0
          },
          {
            "_id": "65968223d78e8905f0e513f1",
            "name": "Women Striped Viscose Rayon Straight Kurta  (Light Blue, White)",
            "description": "Ideal For\nWomen\nLength Type\nCalf Length\nBrand Color\nCYAN BLUE\nOccasion\nCasual\nPattern\nStriped\nType\nStraight\nFabric\nViscose Rayon\nNeck\nRound Neck",
            "price": 369,
            "category": "Women",
            "size": [
              "Small",
              "Medium",
              "Large",
              "Extra Large"
            ],
            "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704362504122-s-mor0002-morpunkhi-original-imagfgu3gqfuyzeh.webp?alt=media&token=26c5cc37-e3bc-40b0-bf9e-7e1ca56a5697",
            "__v": 0
          },
          {
            "_id": "65968253d78e8905f0e513f3",
            "name": "Women Cotton Silk Kurti Trouser Set",
            "description": "Fabric\nCotton Silk\nType\nKurta, Pant And Dupatta Set\nSales Package\n1 Top, 1 Trouser, 1 Dupatta\nStyle Code\nVV-9344\nLining material\nSilk\nTop fabric\nCotton Blend\nBottom fabric\nSilk\nTop type\nKurti",
            "price": 799,
            "category": "Women",
            "size": [
              "Small",
              "Medium",
              "Large",
              "Extra Large"
            ],
            "mainImage": "https://firebasestorage.googleapis.com/v0/b/store-37ff0.appspot.com/o/1704362556634-3xl-vv-9344-vredevogel-original-imagh6czajmrupsa.webp?alt=media&token=fceed574-d16e-4d7a-a61b-cf50da727be2",
            "__v": 0
          },
          {
            "_id": "65968253d78e8905f0e513f3",
            "name": "Women Cotton lehenga",
            "description": "Fabric\nCotton Silk\nType\nKurta, Pant And Dupatta Set\nSales Package\n1 Top, 1 Trouser, 1 Dupatta\nStyle Code\nVV-9344\nLining material\nSilk\nTop fabric\nCotton Blend\nBottom fabric\nSilk\nTop type\nKurti",
            "price": 799,
            "category": "Women",
            "size": [
              "Small",
              "Medium",
              "Large",
              "Extra Large"
            ],
            "mainImage": "/UMANG_IMAGES/Janhvi_Kapoor_Lehenga_High_res_20-09-2024-04-38_650x900.avif",
            "__v": 0
          },

          {
            "_id": "65968253d78e8905f0e513f3",
            "name": "Women's Western Dress",
            "description": "Fabric\nCotton Silk\nType\nKurta, Pant And Dupatta Set\nSales Package\n1 Top, 1 Trouser, 1 Dupatta\nStyle Code\nVV-9344\nLining material\nSilk\nTop fabric\nCotton Blend\nBottom fabric\nSilk\nTop type\nKurti",
            "price": 799,
            "category": "Women",
            "size": [
              "Small",
              "Medium",
              "Large",
              "Extra Large"
            ],
            "mainImage": "/UMANG_IMAGES/image_3.jpeg",
            "__v": 0
          }
        ]
      }

      if (params == "Kids") {
        setData(kidsData["data"]);


      }
      if (params == "Men") {
        setData(mensData["data"]);

      }
      if (params == "Women") {
        setData(womensData["data"]);

      }


      // setData(kidsData["data"]);


    };
    fetchData();
    // window.scrollTo(0, 0);
  }, [params]);

  // if (!data[0]?.mainImage) {
  //   return (
  //     <div className="w-full lg:w-11/12 mx-auto my-4">
  //       <CardSkeleton />
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-96 bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-center justify-center w-full h-full bg-no-repeat bg-cover bg-hero-pattern">
          <h1 className="text-4xl font-bold text-white">{params}</h1>
          <p className="text-xl font-medium text-white">
            For unique and stylish clothing in the collection you can select the
            best one for you.
          </p>
        </div>
      </div>
      <div
        className="mx-auto w-11/12 px-2 py-8 sm:px-6 sm:py-12 lg:px-8 text-gray-500 text-sm"
        style={{ maxWidth: "90rem" }}
      >
        Home <span className="mx-2">/</span> {params}
      </div>
      <div className="w-full lg:w-11/12 mx-auto my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
        {data?.map((product, key) => (
         
            <div key={key}>
            <div className="aspect-h-1 aspect-w-1 w-full  md:h-5/6 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <Image
                width={500}
                height={400}
                src={product?.mainImage}
                alt={product?.name}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product?.name}</h3>

            </div>
            
          
        ))}
      </div>
    </>
  );
};

export default Category;
