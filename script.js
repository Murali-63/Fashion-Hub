
        // Product Data categorized by fashion categories and subcategories
        const productData = {
            men: {
                shirts: [
                    {
                        id: 1,
                        name: "Classic White Shirt",
                        description: "Premium cotton shirt with perfect fit for formal occasions",
                        price: 1299,
                        originalPrice: 1999,
                        image: "https://www.nicobar.com/cdn/shop/files/NBI038443_1.jpg?v=1738834121",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 2,
                        name: "Denim Shirt",
                        description: "Casual denim shirt for everyday wear",
                        price: 1499,
                        originalPrice: 2299,
                        image: "https://www.crimsouneclub.com/cdn/shop/files/JSH31577_1_d3f338ce-1a89-4c39-9f7b-4025c4d279d0.jpg?v=1754561230",
                        special: false,
                        sizes: ['M', 'L', 'XL']
                    },
                    {
                        id: 3,
                        name: "Formal Blue Shirt",
                        description: "Elegant formal shirt for office wear",
                        price: 1399,
                        originalPrice: 2099,
                        image: "https://www.beyoung.in/api/cache/catalog/products/shirt_squre_image_update_14_3_2022/navy_blue_cotton_solid_shirts_for_men_base_02_05_2024_700x933.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                  {
                        id: 4,
                        name: "Checked Casual Shirt",
                        description: "Trendy checked shirt for a casual look",
                        price: 1199,
                        originalPrice: 1799,
                        image: "https://static.cilory.com/681503-thickbox_default/nologo-white-navy-checked-casual-shirt.jpg.webp",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL', 'XXL']
                  },
                  {
                        id: 5,
                        name: "Linen Summer Shirt",
                        description: "Lightweight linen shirt perfect for summer days",
                        price: 1599,
                        originalPrice: 2499,
                        image: "https://cdn.shopify.com/s/files/1/0004/3686/3040/files/HamptonLinenShirt-AloeGreen2.jpg?v=1737006092",
                        special: true,
                        sizes: ['M', 'L', 'XL']
                  },
                    {
                        id: 6,
                        name: "Flannel Shirt",
                        description: "Warm flannel shirt for a cozy look",
                        price: 1399,
                        originalPrice: 1999,
                        image: "https://cdn17.nnnow.com/web-images/large/styles/4AUE1RZUYOC/1722851180709/1.JPG",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 7,
                        name: "Oxford Shirt",
                        description: "Classic oxford shirt for a timeless style",
                        price: 1299,
                        originalPrice: 1899,
                        image: "https://media.powerlook.in/catalog/product/1/_/1_3__2.jpg?aio=w-640",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 8,
                        name: "Casual Plaid Shirt",
                        description: "Relaxed fit plaid shirt for casual outings",
                        price: 1199,
                        originalPrice: 1699,
                        image: "https://s.alicdn.com/@sc04/kf/A0f4cfdaa4711448699b1766e3554f985D.png",
                        special: false,
                        sizes: ['M', 'L', 'XL']
                    },
                    {
                        id: 9,
                        name: "Striped Dress Shirt",
                        description: "Sophisticated striped shirt for formal events",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://5.imimg.com/data5/SELLER/Default/2023/9/343563523/MV/QE/QR/88905037/white-a.jpeg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 10,
                        name: "Casual Chambray Shirt",
                        description: "Lightweight chambray shirt for a laid-back look",
                        price: 1399,
                        originalPrice: 1999,
                        image: "https://5.imimg.com/data5/ZY/OG/GS/SELLER-76774604/kivon-mens-casual-denim-shirt-blue-500x500.png",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 11,
                        name: "Denim Western Shirt",
                        description: "Rugged denim shirt with western style",
                        price: 1599,
                        originalPrice: 2499,
                        image: "https://starrwesternwear.com/cdn/shop/files/Levis-Mens-Classic-Western-Standard-Fit-Shirt-857450074.png?v=1718979545",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 12,
                        name: "Hawaiian Print Shirt",
                        description: "Vibrant Hawaiian print shirt for a tropical vibe",
                        price: 1299,
                        originalPrice: 1899,
                        image: "https://www.nameahawaii.com/cdn/shop/products/Men_s_Aloha_Shirt_Lau_Hala_Blue-2_1485x.jpg?v=1667093096",
                        special: false,
                        sizes: ['M', 'L', 'XL']
                    },
                    {
                        id: 13,
                        name: "Mandarin Collar Shirt",
                        description: "Modern mandarin collar shirt for a sleek look",
                        price: 1399,
                        originalPrice: 1999,
                        image: "https://ramrajcotton.in/cdn/shop/files/1_83f6edfa-271c-4e6d-b59d-6bde9516b948.jpg?v=1748599426",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 14,
                        name: "Linen Blend Shirt",
                        description: "Breathable linen blend shirt for warm weather",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://media.powerlook.in/catalog/product/1/3/1347521_5_.jpg?aio=w-640",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 15,
                        name: "Casual Short Sleeve Shirt",
                        description: "Relaxed fit short sleeve shirt for casual outings",
                        price: 1199,
                        originalPrice: 1699,
                        image: "https://cobbitaly.com/cdn/shop/files/CHBW2433WHITE_1_3c4af19e-f07a-4730-9847-4559bacd8b85.jpg?v=1756703951",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 16,
                        name: "Formal Pinstripe Shirt",
                        description: "Elegant pinstripe shirt for business attire",
                        price: 1599,
                        originalPrice: 2499,
                        image: "https://theformalclub.in/cdn/shop/files/PRE_1.jpg?v=1729252020&width=1024",
                        special: false,
                        sizes: ['M', 'L', 'XL']
                    },
                    {
                        id: 17,
                        name: "Casual Linen Shirt",
                        description: "Lightweight linen shirt for a breezy look",
                        price: 1399,
                        originalPrice: 1999,
                        image: "https://cdn.linenclub.com/media/catalog/product/cache/d8d099ed0f54be45d4eb2c71c1a3b40d/l/c/lcsfsp0022820_1.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 18,
                        name: "Denim Button-Up Shirt",
                        description: "Classic denim button-up shirt for a rugged style",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://m.media-amazon.com/images/I/71wHo8DU1aL._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 19,
                        name: "Casual Floral Shirt",
                        description: "Vibrant floral print shirt for a fun look",
                        price: 1299,
                        originalPrice: 1899,
                        image: "https://m.media-amazon.com/images/I/71-A5Y8sTTL._UY350_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 20,
                        name: "Oxford Cloth Button-Down Shirt",
                        description: "Durable oxford cloth shirt for a classic look",
                        price: 1399,
                        originalPrice: 1999,
                        image: "https://thehamptons.in/cdn/shop/files/BD0A6654.jpg?v=1754068939&width=3000",
                        special: false,
                        sizes: ['M', 'L', 'XL']
                    },
                    {
                        id: 21,
                        name: "Casual Striped Shirt",
                        description: "Relaxed fit striped shirt for everyday wear",
                        price: 1199,
                        originalPrice: 1699,
                        image: "https://media-us.landmarkshops.in/cdn-cgi/image/h=730,w=540,q=85,fit=cover/max-new/1000013611048-Green-GREEN-1000013611048_01-2100.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 22,
                        name: "Formal Solid Color Shirt",
                        description: "Sleek solid color shirt for formal occasions",
                        price: 1599,
                        originalPrice: 2499,
                        image: "https://cobbitaly.com/cdn/shop/products/NVFSRE4092NAVYBLUE_1.jpg?v=1756380739",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 23,
                        name: "Casual Denim Shirt",
                        description: "Versatile denim shirt for a casual look",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://static.cilory.com/740876-thickbox_default/mens-blue-distressed-casual-denim-shirt.jpg.webp",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 24,
                        name: "Linen Casual Shirt",
                        description: "Lightweight linen shirt for a relaxed style",
                        price: 1399,
                        originalPrice: 1999,
                        image: "https://www.ralphlauren.global/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/default/dwd56a125c/img/202507/07312025-eu-m-main-casual-shirts-mb/0731_m_main_aisle_casual_shirts_c01a_img.jpg",
                        special: false,
                        sizes: ['M', 'L', 'XL']
                    },
                    {
                        id: 25,
                        name: "Checked Formal Shirt",
                        description: "Elegant checked shirt for business attire",
                        price: 1299,
                        originalPrice: 1899,
                        image: "https://d118ps6mg0w7om.cloudfront.net/media/catalog/product/s/s/fit-in/1000x1333/ss-24_4000x5000-04-10-24_bndr-4039-s-88-beige_3_bndr-4039-s-88-beige.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 26,
                        name: "Casual Short Sleeve Shirt",
                        description: "Comfortable short sleeve shirt for casual outings",
                        price: 1199,
                        originalPrice: 1699,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNzaEkb8WLuaLhDTTWCv2H1bG1cyl9sTOdw&s",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 27,
                        name: "Formal Striped Shirt",
                        description: "Sophisticated striped shirt for formal events",
                        price: 1599,
                        originalPrice: 2499,
                        image: "https://myraymond.com/cdn/shop/files/RMSU13071-B7-1.jpg?v=1725603487",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 28,
                        name: "Denim Western Shirt",
                        description: "Rugged denim shirt with western style",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://stetson.com/cdn/shop/files/11-001-0465-6020-BU_alt1_large.jpg?v=1701107218",
                        special: false,
                        sizes: ['M', 'L', 'XL']
                    },
                    {
                        id: 29,
                        name: "Hawaiian Print Shirt",
                        description: "Vibrant Hawaiian print shirt for a tropical vibe",
                        price: 1299,
                        originalPrice: 1899,
                        image: "https://m.media-amazon.com/images/I/81tx1CZGKLL._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 30,
                        name: "Mandarin Collar Shirt",
                        description: "Modern mandarin collar shirt for a sleek look",
                        price: 1399,
                        originalPrice: 1999,
                        image: "https://rajubhaihargovindas.com/14111-large_default/japs-maroon-linen-mandarin-collar-regular-fit-shirt.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 31,
                        name: "Casual Button-Up Shirt",
                        description: "Relaxed button-up shirt for everyday wear",
                        price: 1299,
                        originalPrice: 1899,
                        image: "https://m.media-amazon.com/images/I/510O5ZB+raL._UY350_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 32,
                        name: "Formal Solid Color Shirt",
                        description: "Sleek solid color shirt for formal occasions",
                        price: 1599,
                        originalPrice: 2499,
                        image: "https://thefoomer.in/cdn/shop/products/jpeg-optimizer_PATP5153.jpg?v=1680162712",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 33,
                        name: "Casual Denim Shirt",
                        description: "Versatile denim shirt for a casual look",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://cobbitaly.com/cdn/shop/files/DSFJF491BLUE_1_7366fd5e-f33f-4fda-b184-e2d63ce6f513.jpg?v=1754889938",
                        special: false,
                        sizes: ['M', 'L', 'XL']
                    },
                    {
                        id: 34,
                        name: "Linen Casual Shirt",
                        description: "Lightweight linen shirt for a relaxed style",
                        price: 1399,
                        originalPrice: 1999,
                        image: "https://cdn.linenclub.com/media/catalog/product/cache/d8d099ed0f54be45d4eb2c71c1a3b40d/l/c/lcsfsp0300976_0.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 35,
                        name: "Checked Formal Shirt",
                        description: "Elegant checked shirt for business attire",
                        price: 1299,
                        originalPrice: 1899,
                        image: "https://www.ottostore.com/cdn/shop/files/OTTOXDQ_2392copya_500x.jpg?v=1748846266",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 36,
                        name: "Casual Short Sleeve Shirt",
                        description: "Comfortable short sleeve shirt for casual outings",
                        price: 1199,
                        originalPrice: 1699,
                        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/26409260/2023/12/14/ffabc734-72f8-4fa2-8e18-4b7a62870f631702494755932ModaRapidoMenGreenSlimFitStripedCasualShirt6.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 37,
                        name: "Formal Striped Shirt",
                        description: "Sophisticated striped shirt for formal events",
                        price: 1599,
                        originalPrice: 2499,
                        image: "https://theformalclub.in/cdn/shop/files/PRE_1.jpg?v=1729252020&width=1024",
                        special: false,
                        sizes: ['M', 'L', 'XL']
                    },
                    {
                        id: 38,
                        name: "Denim Western Shirt",
                        description: "Rugged denim shirt with western style",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEaBHkvjey_aX0xIQdFRLE4ciuF-MYz3zLw&s",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 39,
                        name: "Hawaiian Print Shirt",
                        description: "Vibrant Hawaiian print shirt for a tropical vibe",
                        price: 1299,
                        originalPrice: 1899,
                        image: "https://m.media-amazon.com/images/I/61OmGOfYldL._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 40,
                        name: "Mandarin Collar Shirt",
                        description: "Modern mandarin collar shirt for a sleek look",
                        price: 1399,
                        originalPrice: 1999,
                        image: "https://m.media-amazon.com/images/I/61OmGOfYldL._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL', 'XXL']
                    },
                ],
                tshirts: [
                    {
                        id: 41,
                        name: "Premium Cotton T-Shirt",
                        description: "Soft cotton t-shirt for everyday comfort",
                        price: 599,
                        originalPrice: 899,
                        image: "https://www.lykcon.com/cdn/shop/files/BlackRoundNeckTshirt_14.jpg?v=1700489116",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 42,
                        name: "Graphic Print T-Shirt",
                        description: "Trendy t-shirt with unique graphic print",
                        price: 699,
                        originalPrice: 999,
                        image: "https://www.montecarlo.in/cdn/shop/files/224064634-1-38_1.jpg?v=1718970896",
                        special: false,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 43,
                        name: "V-Neck T-Shirt",
                        description: "Stylish V-neck t-shirt for a modern look",
                        price: 649,
                        originalPrice: 899,
                        image: "https://images.jdmagicbox.com/quickquotes/images_main/men-half-sleeve-t-shirt-2217467555-03nu2rip.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 44,
                        name: "Polo T-Shirt",
                        description: "Classic polo t-shirt for a sporty look",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://shop.teamsg.in/cdn/shop/files/3_543a42f9-0a8e-43d4-ad97-e1102487fa81.jpg?v=1726041794&width=1445",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 45,
                        name: "Long Sleeve T-Shirt",
                        description: "Comfortable long sleeve t-shirt for cooler days",
                        price: 699,
                        originalPrice: 999,
                        image: "https://www.gritstones.com/cdn/shop/files/GSHS7012WHTOTM_4.jpg?v=1746392850&width=1080",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 46,
                        name: "Striped T-Shirt",
                        description: "Casual striped t-shirt for a laid-back look",
                        price: 649,
                        originalPrice: 899,
                        image: "https://static.aceomni.cmsaceturtle.com/prod/product-image/aceomni/Wrangler/Monobrand/WMTS003017/WMTS003017_2.JPG",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 47,
                        name: "Henley T-Shirt",
                        description: "Trendy henley t-shirt with button detail",
                        price: 749,
                        originalPrice: 1099,
                        image: "https://static.cilory.com/744947-thickbox_default/crimson-red-half-sleeves-henley-t-shirt-by-grunt.jpg.webp",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 48,
                        name: "Pocket T-Shirt",
                        description: "Casual t-shirt with chest pocket detail",
                        price: 599,
                        originalPrice: 899,
                        image: "https://redflame.in/cdn/shop/files/USTS-52882-B_1_45ff42b3-c62f-496d-b9ad-f8fbce92a3e0.jpg?v=1715852808&width=1260",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 49,
                        name: "Performance T-Shirt",
                        description: "Moisture-wicking performance t-shirt for workouts",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://images.fancode.com/media/catalog/product/h/a/hardik_pandya_men_performance_round_neck_quick_dry_black_tshirt_for_gym_running_yoga_indoor_outdoor_sports(23).jpg?hash=eyJrZXkiOiJtZWRpYS9jYXRhbG9nL3Byb2R1Y3QvaC9hL2hhcmRpa19wYW5keWFfbWVuX3BlcmZvcm1hbmNlX3JvdW5kX25lY2tfcXVpY2tfZHJ5X2JsYWNrX3RzaGlydF9mb3JfZ3ltX3J1bm5pbmdfeW9nYV9pbmRvb3Jfb3V0ZG9vcl9zcG9ydHMoMjMpLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjozMTAsImhlaWdodCI6NDEzfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 50,
                        name: "Basic Crew Neck T-Shirt",
                        description: "Essential crew neck t-shirt for everyday wear",
                        price: 549,
                        originalPrice: 799,
                        image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/139651s.jpg?im=Resize,width=750",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },
                    {
                        id:     51,
                        name: "Graphic Long Sleeve T-Shirt",
                        description: "Trendy long sleeve t-shirt with graphic print",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://images.bike24.com/i/mb/13/f7/62/marmot-windridge-long-sleeve-t-shirt-men-black-1-1634959.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id:     52,
                        name: "Raglan Sleeve T-Shirt",
                        description: "Sporty raglan sleeve t-shirt for a casual look",
                        price: 699,
                        originalPrice: 999,
                        image: "https://tirupurbrands.com/wp-content/uploads/2021/09/Mens-Raglan-Half-hand-T-shirt-in-Tirupur.jpg",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },
                    {
                        id:   53,
                        name: "Vintage Wash T-Shirt",
                        description: "Retro-inspired vintage wash t-shirt for a cool look",
                        price: 749,
                        originalPrice: 1099,
                        image: "https://hips.hearstapps.com/hmg-prod/images/mhl-tshirts-mackweldon-0260-688a641b198e3.jpg?crop=1.00xw:1.00xh;0,0&resize=1120:*",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 54,
                        name: "Pocket Henley T-Shirt",
                        description: "Casual henley t-shirt with chest pocket detail",
                        price: 649,
                        originalPrice: 899,
                        image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/22032726/2023/2/18/15461515-76ad-4c57-a69d-5a6fcee794b51676665839026PeopleMenOliveGreenStripedHenleyNeckSlimFitT-shirt1.jpg",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 55,
                        name: "Athletic Fit T-Shirt",
                        description: "Slim fit athletic t-shirt for a modern look",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://www.sir126.it/cdn/shop/files/750x1000-t-shirt-karhu-azzurra-da-uomo-kt00377.jpg?v=1719192088&width=750",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 56,
                        name: "Basic V-Neck T-Shirt",
                        description: "Essential V-neck t-shirt for everyday wear",  
                        price: 599,
                        originalPrice: 899,
                        image: "https://www.sporto.in/cdn/shop/products/2_0f38aaf0-b32e-4ec1-9f91-f5bf2151826c_1080x1440.jpg?v=1714717341",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 57,
                        name: "Graphic Crew Neck T-Shirt",
                        description: "Trendy crew neck t-shirt with graphic print",
                        price: 699,
                        originalPrice: 999,
                        image: "https://static.aceomni.cmsaceturtle.com/prod/product-image/aceomni/Wrangler/Monobrand/WMTS005628/WMTS005628_1.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id:     58,
                        name: "Striped Long Sleeve T-Shirt",
                        description: "Casual striped long sleeve t-shirt for a laid-back look",
                        price: 649,
                        originalPrice: 899,
                        image: "https://m.media-amazon.com/images/I/61NhxjVtcmL._UY1000_.jpg",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },
                    {
                        id:     59,
                        name: "Performance Long Sleeve T-Shirt",
                        description: "Moisture-wicking long sleeve t-shirt for workouts",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://ryzon.net/cdn/shop/files/PhantomRunningLongsleeveMenAB-10.jpg?v=1711535332&width=1946",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    
                {
                        id: 60,
                        name: "Basic Pocket T-Shirt",
                        description: "Essential pocket t-shirt for everyday wear",
                        price: 599,
                        originalPrice: 899,
                        image: "https://www.jiomart.com/images/product/original/rv5qx6ywr0/ecoline-clothing-men-black-poly-filament-polo-neck-half-sleeve-pocket-t-shirt-l-product-images-rv5qx6ywr0-6-202304192151.jpg?im=Resize=(500,630)",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 61,
                        name: "Raglan Sleeve Long T-Shirt",
                        description: "Sporty raglan sleeve long t-shirt for a casual look",
                        price: 699,
                        originalPrice: 999,
                        image: "https://cdn.bfab.com/_next/image?url=https%3A%2F%2Fadmin.bfab.me%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F083cf153f9c91806e1701964acf5d2a8%2F1%2F4%2F14731703-1415078414215809_ff62a5d1-4964-41e7-a8b4-da32e0cec29d_u6dzmcy8dd28r0uf.jpg&w=3840&q=90",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 62,
                        name: "Vintage Graphic T-Shirt",
                        description: "Retro-inspired vintage graphic t-shirt for a cool look",
                        price: 749,
                        originalPrice: 1099,
                        image: "https://images-static.nykaa.com/media/catalog/product/3/6/3683563565Black_1.jpg?tr=w-500",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 63,
                        name: "Pocket V-Neck T-Shirt",
                        description: "Casual V-neck t-shirt with chest pocket detail",
                        price: 649,
                        originalPrice: 899,
                        image: "https://m.media-amazon.com/images/I/61Xfk8pIsOL._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 64,
                        name: "Athletic Fit Long Sleeve T-Shirt",
                        description: "Slim fit athletic long sleeve t-shirt for a modern look",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://www.wodarmour.in/cdn/shop/files/Untitled-10_5d4e8cd8-a530-4fd7-a865-aec87b790cf6.jpg?v=1734330401",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 65,
                        name: "Basic Henley T-Shirt",
                        description: "Essential henley t-shirt for everyday wear",
                        price: 599,
                        originalPrice: 899,
                        image: "https://m.media-amazon.com/images/I/71XLy9DrzPL._UY350_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 67,
                        name: "Graphic Pocket T-Shirt",
                        description: "Trendy pocket t-shirt with graphic print",
                        price: 699,
                        originalPrice: 999,
                        image: "https://veirdo.in/cdn/shop/files/Artboard_34.jpg?v=1754544080",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 68,
                        name: "Striped Crew Neck T-Shirt",
                        description: "Casual striped crew neck t-shirt for a laid-back look",
                        price: 649,
                        originalPrice: 899,
                        image: "https://images.meesho.com/images/products/393384098/nfx4z_512.webp?width=512",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 69,
                        name: "Performance Pocket T-Shirt",
                        description: "Moisture-wicking pocket t-shirt for workouts",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://m.media-amazon.com/images/I/71thJYzpnkL._UY1100_.jpg",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 70,
                        name: "Basic Raglan Sleeve T-Shirt",
                        description: "Essential raglan sleeve t-shirt for everyday wear",
                        price: 599,
                        originalPrice: 899,
                        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 71,
                        name: "Vintage Wash Long Sleeve T-Shirt",
                        description: "Retro-inspired vintage wash long sleeve t-shirt for a cool look",
                        price: 749,
                        originalPrice: 1099,
                        image: "https://images-cdn.ubuy.co.in/65b511998adda336eb117663-tuislay-vintage-oversized-t-shirts-for.jpg",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 72,
                        name: "Pocket Athletic Fit T-Shirt",
                        description: "Casual athletic fit t-shirt with chest pocket detail",
                        price: 649,
                        originalPrice: 899,
                        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/28128034/2024/3/8/cf70fa88-c999-40fa-90ff-fa3336a38a3f1709873710135AESTHETICNATIONMenDri-FITPocketsSlimFitT-shirt1.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 73,
                        name: "Long Sleeve Henley T-Shirt",
                        description: "Comfortable long sleeve henley t-shirt for casual outings",
                        price: 699,
                        originalPrice: 999,
                        image: "https://www.dennislingo.com/cdn/shop/products/DLMTS011_OL_287_29_b83fd9b8-3565-40a3-b9a4-e3b40e0c6220.jpg?v=1669895572&width=800",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },{
                        id: 74,
                        name: "Graphic Athletic Fit T-Shirt",
                        description: "Trendy athletic fit t-shirt with graphic print",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://styleunion.in/cdn/shop/files/ESMGT00019CLOUDDANCER_5.jpg?v=1740670358&width=2400",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 75,
                        name: "Striped Pocket T-Shirt",
                        description: "Casual striped pocket t-shirt for a laid-back look",
                        price: 599,
                        originalPrice: 899,
                        image: "https://m.media-amazon.com/images/I/91MjX-+gyRL._UY1100_.jpg",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },{
                        id: 76,
                        name: "Performance Raglan Sleeve T-Shirt",
                        description: "Moisture-wicking raglan sleeve t-shirt for workouts",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://www.jiomart.com/images/product/original/441146757_teal/fast-dry-high-neck-t-shirt-with-raglan-sleeves-model-441146757_teal-0-202211091926.jpg?im=Resize=(1000,1000)",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']    
                    },{
                        id: 77,
                        name: "Basic Graphic T-Shirt",
                        description: "Essential graphic t-shirt for everyday wear",
                        price: 649,
                        originalPrice: 899,
                        image: "https://m.media-amazon.com/images/I/81mNcpjY2vL._UY1100_.jpg",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },
                    {
                        id: 78,
                        name: "Vintage Wash Pocket T-Shirt",
                        description: "Retro-inspired vintage wash pocket t-shirt for a cool look",
                        price: 749,
                        originalPrice: 1099,
                        image: "https://www.champion.com/cdn/shop/files/T7737407D55_A199-FRONT_grande.jpg?v=1756145452",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 79,
                        name: "Athletic Fit Henley T-Shirt",
                        description: "Casual athletic fit henley t-shirt with chest pocket detail",
                        price: 699,
                        originalPrice: 999,
                        image: "https://assets.ajio.com/medias/sys_master/root/20240722/IgWW/669e8d371d763220fa101e32/-473Wx593H-700219090-black-MODEL.jpg",
                        special: true,
                        sizes: ['M', 'L', 'XL', 'XXL']
                    },{
                        id: 80,
                        name: "Long Sleeve Graphic T-Shirt",
                        description: "Trendy long sleeve t-shirt with graphic print",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://edhardy.eu/cdn/shop/files/ED-HARDY-MENS-SKULL-KING-DOUBLE-LAYER-LONG-SLEEVE-TSHIRT-BLUE_WHITE-ECOMM-1.jpg?v=1749548143&width=1800",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
        
                ],
                pants: [
                    {
                        id: 81,
                        name: "Slim Fit Jeans",
                        description: "Comfortable denim jeans with stretch for all-day wear",
                        price: 1599,
                        originalPrice: 2499,
                        image: "https://levi.in/cdn/shop/files/182981482_01_Front_4b14f5bd-3c6a-4603-acda-096c5675d825.jpg?v=1740488440",
                        special: false,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 82,
                        name: "Casual Chinos",
                        description: "Versatile chino pants for casual and semi-formal wear",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/2167365/2019/9/12/0b36a3ce-f3bc-4eaa-ae72-5dc43f1711531568283655197-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-8211568283653634-1.jpg",
                        special: true,
                        sizes: ['30', '32', '34', '36', '38']
                    },
                    {
                        id: 83,
                        name: "Cargo Pants",
                        description: "Durable cargo pants with multiple pockets for utility",
                        price: 1699,
                        originalPrice: 2599,
                        image: "https://pantproject.com/cdn/shop/products/DSC01278_cfa0cd61-bcfe-4d4b-92d3-6088b617f1e4.jpg?v=1677584122",
                        special: false,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 84,
                        name: "Formal Trousers",
                        description: "Classic formal trousers for office and events",
                        price: 1799,
                        originalPrice: 2699,
                        image: "https://greenfibre.com/cdn/shop/files/iqiu_2.jpg?v=1712207072&width=1445",
                        special: true,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 85,
                        name: "Jogger Pants",
                        description: "Comfortable jogger pants for casual and athletic wear",
                        price: 1299,
                        originalPrice: 1999,
                        image: "https://assets.ajio.com/medias/sys_master/root/20241112/c8o6/6732b134f9b8ef490b158a9b/-473Wx593H-700695913-black-MODEL.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 86,
                        name: "Relaxed Fit Jeans",
                        description: "Comfortable relaxed fit jeans for everyday wear",
                        price: 1599,
                        originalPrice: 2499,
                        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/2025/MARCH/28/FgtKXZD0_57e58b0ca7ee49e3922ad45590759f14.jpg",
                        special: true,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 87,
                        name: "Slim Fit Chinos",
                        description: "Modern slim fit chinos for a stylish look",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/30114968/2024/8/28/5c05c61b-41a1-4767-b2ba-30267a0ce2191724841654329-Levis-Men-Trousers-1051724841653767-1.jpg",
                        special: false,
                        sizes: ['30', '32', '34', '36', '38']
                    },
                    {
                        id: 88,
                        name: "Tapered Cargo Pants",
                        description: "Stylish tapered cargo pants with a modern fit",
                        price: 1699,
                        originalPrice: 2599,
                        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/25483216/2024/12/14/fd6cdb2d-28e3-49b5-b2de-830cc655d50d1734169760087-HIGHLANDER-Men-Tapered-Fit-Cargo-Trousers-3051734169759258-1.jpg",
                        special: true,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 89,
                        name: "Wool Blend Trousers",
                        description: "Elegant wool blend trousers for formal occasions",
                        price: 1799,
                        originalPrice: 2699,
                        image: "https://www.gutteridge.com/dw/image/v2/BDJZ_PRD/on/demandware.static/-/Sites-catalog-gutteridge-master/default/dw73551047/hi-res/PA4474UOGX15_0561C_001.jpg?sw=1000&sh=1350&q=90&strip=false",
                        special: false,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 90,
                        name: "Athletic Jogger Pants",
                        description: "Performance jogger pants for athletic and casual wear",
                        price: 1299,
                        originalPrice: 1999,
                        image: "https://m.media-amazon.com/images/I/616aUrygYtL._UF1000,1000_QL80_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 91,
                        name: "Classic Fit Jeans",
                        description: "Timeless classic fit jeans for everyday style",
                        price: 1599,
                        originalPrice: 2499,
                        image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/31284362/2024/11/13/4eb2bd27-9645-408e-aebc-b04c7398f04d1731495560648-Mens-511-Slim-Fit-Black-Jeans-7161731495560043-1.jpg",
                        special: false,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 92,
                        name: "Stretch Chinos",
                        description: "Comfortable stretch chinos for all-day wear",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://www.bombayshirts.com/cdn/shop/files/1.Midshot_ed780a8b-0dcc-4ed0-8869-269e636ab3ff_800x.jpg?v=1715941218",
                        special: true,
                        sizes: ['30', '32', '34', '36', '38']
                    },
                    {
                        id: 93,
                        name: "Utility Cargo Pants",
                        description: "Functional utility cargo pants with multiple pockets",
                        price: 1699,
                        originalPrice: 2599,
                        image: "https://static.cilory.com/724302-thickbox_default/grunt-dark-blue-relaxed-fit-cargo-pants-with-multiple-utility-pockets.jpg.webp",
                        special: false,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 94,
                        name: "Slim Wool Trousers",
                        description: "Sophisticated slim wool trousers for formal wear",
                        price: 1799,
                        originalPrice: 2699,
                        image: "https://images-static.nykaa.com/media/catalog/product/8/c/8c55f8dCOCC_1.jpg?tr=w-500",
                        special: true,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 95,
                        name: "Casual Jogger Pants",
                        description: "Relaxed fit jogger pants for casual comfort",
                        price: 1299,
                        originalPrice: 1999,
                        image: "https://m.media-amazon.com/images/I/71r34krHQAL._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 96,
                        name: "Distressed Jeans",
                        description: "Trendy distressed jeans for a rugged look",
                        price: 1599,
                        originalPrice: 2499,
                        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/21565552/2023/6/2/b8489216-5e7c-4b16-8f6e-5952b33b5daf1685705433352-Kook-N-Keech-Men-Jeans-2701685705433054-1.jpg",
                        special: true,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 97,
                        name: "Slim Stretch Chinos",
                        description: "Modern slim stretch chinos for a stylish fit",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1726000530-mhl-chinos-dockers-4426-66e0ad8d3316d.jpg?crop=1xw:1xh;center,top&resize=980:*",
                        special: false,
                        sizes: ['30', '32', '34', '36', '38']
                    },
                    {
                        id: 98,
                        name: "Tactical Cargo Pants",
                        description: "Durable tactical cargo pants for outdoor activities",
                        price: 1699,
                        originalPrice: 2599,
                        image: "https://images-cdn.ubuy.co.in/6528cb3e84087004210b6cde-tactical-pants-for-men-cotton-classic.jpg",
                        special: true,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 99,
                        name: "Wool Dress Trousers",
                        description: "Refined wool dress trousers for formal occasions",
                        price: 1799,
                        originalPrice: 2699,
                        image: "https://cdn2.propercloth.com/pic_tccp/698_86f770b7f5ce6a7c7ea6a6eb848f386b_size6.jpg",
                        special: false,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 100,
                        name: "Lightweight Jogger Pants",
                        description: "Breathable lightweight jogger pants for active wear",
                        price: 1299,
                        originalPrice: 1999,
                        image: "https://m.media-amazon.com/images/I/91ZLFq0HJiL._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 101,
                        name: "Relaxed Fit Cargo Pants",
                        description: "Comfortable relaxed fit cargo pants for casual wear",
                        price: 1699,
                        originalPrice: 2599,
                        image: "https://5.imimg.com/data5/ECOM/Default/2024/12/473285288/HL/XQ/AJ/237736399/6929642611-500x500.jpg",
                        special: false,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 102,
                        name: "Wool Blend Dress Trousers",
                        description: "Elegant wool blend dress trousers for special occasions",
                        price: 1799,
                        originalPrice: 2699,
                        image: "https://strellson.com/medias/sys_master/images/images/h50/hab/10082082848798/10082082848798.jpg",
                        special: true,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 103,
                        name: "Performance Jogger Pants",
                        description: "High-performance jogger pants for athletic activities",
                        price: 1299,
                        originalPrice: 1999,
                        image: "https://m.media-amazon.com/images/I/610W1k-LeiL._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 104,
                        name: "Classic Straight Fit Jeans",
                        description: "Timeless straight fit jeans for everyday style",
                        price: 1599,
                        originalPrice: 2499,
                        image: "https://offduty.in/cdn/shop/files/IMG_3157_1080x.jpg?v=1744979438",
                        special: true,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 105,
                        name: "Comfort Stretch Chinos",
                        description: "Comfortable stretch chinos for all-day wear",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://media-us.landmarkshops.in/cdn-cgi/image/h=730,w=540,q=85,fit=cover/max-new/1000012065961-Grey-GREY-1000012065961_01-2100.jpg",
                        special: false,
                        sizes: ['30', '32', '34', '36', '38']
                    },{
                        id: 106,
                        name: "Outdoor Cargo Pants",
                        description: "Durable outdoor cargo pants with multiple pockets",
                        price: 1699,
                        originalPrice: 2599,
                        image: "https://m.media-amazon.com/images/I/81mBHA2odPL._UY1100_.jpg",
                        special: true,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 107,
                        name: "Slim Wool Dress Trousers",
                        description: "Sophisticated slim wool dress trousers for formal wear",
                        price: 1799,
                        originalPrice: 2699,
                        image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/535708s.jpg?im=Resize,width=750",
                        special: false,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 108,
                        name: "Casual Lightweight Jogger Pants",
                        description: "Relaxed fit lightweight jogger pants for casual comfort",
                        price: 1299,
                        originalPrice: 1999,
                        image: "https://m.media-amazon.com/images/I/61o3pIiIJlL._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 109,
                        name: "Denim Cargo Pants",
                        description: "Trendy denim cargo pants for a rugged look",
                        price: 1699,
                        originalPrice: 2599,
                        image: "https://m.media-amazon.com/images/I/91pwA2oKtSL._UY1100_.jpg",
                        special: false,
                        sizes: ['30', '32', '34', '36']
                    },
                    {
                        id: 110,
                        name: "Wool Blend Slim Trousers",
                        description: "Refined wool blend slim trousers for formal occasions",
                        price: 1799,
                        originalPrice: 2699,
                        image: "https://images.hugoboss.com/is/image/boss/hbeu50551584_041_350?$re_fullPageZoom$&qlt=85&fit=crop,1&align=1,1&bgcolor=ebebeb&lastModified=1755620272000&wid=1200&hei=1818",
                        special: true,
                        sizes: ['30', '32', '34', '36']
                    },{
                        id: 111,
                        name: "Athletic Lightweight Jogger Pants",
                        description: "Breathable athletic lightweight jogger pants for active wear",
                        price: 1299,
                        originalPrice: 1999,
                        image: "https://m.media-amazon.com/images/I/81H18kngRNL._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 112,
                        name: "Relaxed Fit Denim Jeans",
                        description: "Comfortable relaxed fit denim jeans for everyday wear",
                        price: 1599,
                        originalPrice: 2499,
                        image: "https://www.dennislingo.com/cdn/shop/files/DLMJNS24016_LB_1.jpg?v=1710934309",
                        special: true,
                        sizes: ['30', '32', '34', '36']
                    },{
                        id: 113,
                        name: "Slim Fit Stretch Chinos",
                        description: "Modern slim fit stretch chinos for a stylish look",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://assets.ajio.com/medias/sys_master/root/20240514/xtCU/664293b216fd2c6e6a02e35d/-473Wx593H-467329050-navy-MODEL3.jpg",
                        special: false,
                        sizes: ['30', '32', '34', '36', '38']
                    },{
                        id: 114,
                        name: "Tactical Denim Cargo Pants",
                        description: "Durable tactical denim cargo pants for outdoor activities",
                        price: 1699,
                        originalPrice: 2599,
                        image: "https://static.cilory.com/716887-thickbox_default/mens-straight-fit-denim-cargo-with-multiple-utility-pockets.jpg.webp",
                        special: true,
                        sizes: ['30', '32', '34', '36']
                    },{
                        id: 115,
                        name: "Wool Dress Slim Trousers",
                        description: "Refined wool dress slim trousers for formal occasions",
                        price: 1799,
                        originalPrice: 2699,
                        image: "https://u-mercari-images.mercdn.net/photos/m53176315257_1.jpg",
                        special: false,
                        sizes: ['30', '32', '34', '36']
                    },{
                        id: 116,
                        name: "Performance Lightweight Jogger Pants",
                        description: "High-performance lightweight jogger pants for athletic activities",
                        price: 1299,
                        originalPrice: 1999,
                        image: "https://images-cdn.ubuy.co.in/6545ff5e3dc5f949d727d9cb-southpole-men-39-s-lightweight-quick.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 117,
                        name: "Classic Fit Denim Jeans",
                        description: "Timeless classic fit denim jeans for everyday style",
                        price: 1599,
                        originalPrice: 2499,
                        image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/31284362/2024/11/13/4eb2bd27-9645-408e-aebc-b04c7398f04d1731495560648-Mens-511-Slim-Fit-Black-Jeans-7161731495560043-1.jpg",
                        special: false,
                        sizes: ['30', '32', '34', '36']
                    },{
                        id: 118,
                        name: "Comfort Stretch Denim Chinos",
                        description: "Comfortable stretch denim chinos for all-day wear",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://m.media-amazon.com/images/I/71GnC+1pU9L._UY1100_.jpg",
                        special: true,
                        sizes: ['30', '32', '34', '36', '38']
                    },{
                        id: 119,
                        name: "Outdoor Denim Cargo Pants",
                        description: "Durable outdoor denim cargo pants with multiple pockets",
                        price: 1699,
                        originalPrice: 2599,
                        image: "https://m.media-amazon.com/images/I/81mBHA2odPL._UY1100_.jpg",
                        special: false,
                        sizes: ['30', '32', '34', '36']
                    },{
                        id: 120,
                        name: "Wool Blend Denim Trousers",
                        description: "Elegant wool blend denim trousers for special occasions",
                        price: 1799,
                        originalPrice: 2699,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgY7Lr2GuKpipCkz7HxN1CPGFl1D4EZ_o1HA&s",
                        special: true,
                        sizes: ['30', '32', '34', '36']
                    },
                ],
                shorts: [
                    {
                        id: 121,
                        name: "Denim Shorts",
                        description: "Comfortable denim shorts for summer",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://media-us.landmarkshops.in/cdn-cgi/image/h=730,w=540,q=85,fit=cover/max-new/1000013605341-Blue-MIDBLUE-1000013605341_01-2100.jpg",
                        special: false,
                        sizes: ['30', '32', '34']
                    },
                    {
                        id: 122,
                        name: "Cargo Shorts",
                        description: "Durable cargo shorts with multiple pockets",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://freakins.com/cdn/shop/files/16julypart2_21945-Edit.jpg?v=1750058762",
                        special: true,
                        sizes: ['30', '32', '34']
                    },
                    {
                        id: 123,
                        name: "Chino Shorts",
                        description: "Versatile chino shorts for casual wear",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://static.aceomni.cmsaceturtle.com/prod/product-image/aceomni/Wrangler/Monobrand/WMST007404/WMST007404_2.jpg",
                        special: false,
                        sizes: ['30', '32', '34']
                    },
                    {
                        id: 124,
                        name: "Athletic Shorts",
                        description: "Lightweight athletic shorts for workouts",
                        price: 699,
                        originalPrice: 999,
                        image: "https://redesignsports.com/cdn/shop/files/4_2532fb1c-e8be-4ce3-bc0a-f473bc88876d.jpg?v=1706103142",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 125,
                        name: "Denim Cutoff Shorts",
                        description: "Trendy denim cutoff shorts for a casual look",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://sassafras.in/cdn/shop/products/MSSHOR90065-1.jpg?v=1757067786",
                        special: false,
                        sizes: ['30', '32', '34']
                    },{
                        id: 126,
                        name: "Utility Cargo Shorts",
                        description: "Functional utility cargo shorts with multiple pockets",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://www.shutterstock.com/image-photo/casual-mens-outfit-featuring-cargo-600nw-2619530989.jpg",
                        special: true,
                        sizes: ['30', '32', '34']
                    },{
                        id: 127,
                        name: "Slim Fit Chino Shorts",
                        description: "Modern slim fit chino shorts for a stylish look",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://gant.in/cdn/shop/files/GS23-0020082410_3.jpg?v=1755179312",
                        special: false,
                        sizes: ['30', '32', '34']
                    },{
                        id: 128,
                        name: "Performance Athletic Shorts",
                        description: "High-performance athletic shorts for workouts",
                        price: 699,
                        originalPrice: 999,
                        image: "https://m.media-amazon.com/images/I/61-pRSkpxJL._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 129,
                        name: "Distressed Denim Shorts",
                        description: "Trendy distressed denim shorts for a rugged look",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://5.imimg.com/data5/CB/XM/MY-62959177/denim-shorts-man.jpg",
                        special: false,
                        sizes: ['30', '32', '34']
                    },{
                        id: 130,
                        name: "Casual Cargo Shorts",
                        description: "Comfortable casual cargo shorts for everyday wear",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://pantproject.com/cdn/shop/products/short-pants-for-men.jpg?v=1667537741",
                        special: true,
                        sizes: ['30', '32', '34']
                    },{
                        id: 131,
                        name: "Stretch Chino Shorts",
                        description: "Comfortable stretch chino shorts for all-day wear",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://pantproject.com/cdn/shop/products/DSC2738-2.jpg?v=1649928355",
                        special: false,
                        sizes: ['30', '32', '34']
                    },{
                        id: 132,
                        name: "Lightweight Athletic Shorts",
                        description: "Breathable lightweight athletic shorts for active wear",
                        price: 699,
                        originalPrice: 999,
                        image: "https://images-na.ssl-images-amazon.com/images/I/81o1Vx0KDPL._AC_UL600_SR600,600_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 133,
                        name: "Classic Denim Shorts",
                        description: "Timeless classic denim shorts for casual style",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://wrogn.com/cdn/shop/files/1_ea2a2ef5-2605-4780-b6bd-9434521a4b05.jpg?v=1728553515",
                        special: false,
                        sizes: ['30', '32', '34']
                    },{
                        id: 134,
                        name: "Modern Fit Cargo Shorts",
                        description: "Stylish modern fit cargo shorts for a trendy look",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/24325206/2023/8/11/34a6059a-ea46-40ab-b2f1-fac12e3cd64a1691744942295-HERENOW-Men-Shorts-2821691744941746-1.jpg",
                        special: true,
                        sizes: ['30', '32', '34']
                    },{
                        id: 135,
                        name: "Chino Walking Shorts",
                        description: "Versatile chino walking shorts for casual outings",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://m.media-amazon.com/images/I/710Yy70yV6L._UY1100_.jpg",
                        special: false,
                        sizes: ['30', '32', '34']
                    },{
                        id: 136,
                        name: "Quick-Dry Athletic Shorts",
                        description: "Quick-dry athletic shorts for intense workouts",
                        price: 699,
                        originalPrice: 999,
                        image: "https://m.media-amazon.com/images/I/51WF+1nbkqL._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 137,
                        name: "Ripped Denim Shorts",
                        description: "Trendy ripped denim shorts for a casual look",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://media-uk.landmarkshops.in/cdn-cgi/image/h=730,w=540,q=85,fit=cover/max-new/1000012026561-Blue-LIGHTBLUE-1000012026561_01-2100.jpg",
                        special: false,
                        sizes: ['30', '32', '34']
                    },{
                        id: 138,
                        name: "Everyday Cargo Shorts",
                        description: "Comfortable everyday cargo shorts for casual wear",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40KvOMksGsKE-SOBUh2b4hc20gqa_Jp9iUg&s",
                        special: true,
                        sizes: ['30', '32', '34']
                    },{
                        id: 139,
                        name: "Slim Stretch Chino Shorts",
                        description: "Modern slim stretch chino shorts for a stylish fit",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/148791s.jpg?im=Resize,width=750",
                        special: false,
                        sizes: ['30', '32', '34']
                    },{
                        id: 140,
                        name: "Ventilated Athletic Shorts",
                        description: "Ventilated athletic shorts for maximum comfort during workouts",
                        price: 699,
                        originalPrice: 999,
                        image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/30041885/2024/9/3/5939ecb6-aa01-4396-baa6-c0ea489ea96d1725364239321-UA-Tech-Vent-Shorts-4761725364239151-1.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 141,
                        name: "Vintage Denim Shorts",
                        description: "Classic vintage denim shorts for a timeless look",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://www.fugazee.com/cdn/shop/files/28-04-202532991.jpg?v=1746881792&width=860",
                        special: false,
                        sizes: ['30', '32', '34']
                    },{
                        id: 142,
                        name: "Tactical Cargo Shorts",
                        description: "Durable tactical cargo shorts for outdoor activities",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://i.pinimg.com/736x/87/ae/b1/87aeb17dbe15ae1a4ef92d4a37173f33.jpg",
                        special: true,
                        sizes: ['30', '32', '34']
                    },{
                        id: 143,
                        name: "Woven Chino Shorts",
                        description: "Lightweight woven chino shorts for casual comfort",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://www.selectedhomme.in/cdn/shop/files/140713004_g0.jpg?v=1746510623&width=1080",
                        special: false,
                        sizes: ['30', '32', '34']
                    },{
                        id: 144,
                        name: "Mesh Athletic Shorts",
                        description: "Breathable mesh athletic shorts for active wear",
                        price: 699,
                        originalPrice: 999,
                        image: "https://www.tuffwraps.com/cdn/shop/files/tuff-essentials-mesh-shorts-small-grey-tuffwraps-31829124874328.jpg?v=1697554864&width=1200",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 145,
                        name: "Frayed Denim Shorts",
                        description: "Trendy frayed denim shorts for a casual look",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://m.media-amazon.com/images/I/91nbsr5tiSL._UY1100_.jpg",
                        special: false,
                        sizes: ['30', '32', '34']
                    },{
                        id: 146,
                        name: "Lightweight Cargo Shorts",
                        description: "Comfortable lightweight cargo shorts for everyday wear",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://m.media-amazon.com/images/I/61DlE8Rk0BL._UY1100_.jpg",
                        special: true,
                        sizes: ['30', '32', '34']
                    },{
                        id: 147,
                        name: "Slim Fit Woven Chino Shorts",
                        description: "Modern slim fit woven chino shorts for a stylish look",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://www.selectedhomme.in/cdn/shop/files/140713002_g1.jpg?v=1745506717&width=2048",
                        special: false,
                        sizes: ['30', '32', '34']
                    },{
                        id: 148,
                        name: "High-Performance Athletic Shorts",
                        description: "High-performance athletic shorts for intense workouts",
                        price: 699,
                        originalPrice: 999,
                        image: "https://aguante.in/cdn/shop/files/AMSL15-LIME-M_4.jpg?v=1742897448&width=1000",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 149,
                        name: "Classic Fit Denim Shorts",
                        description: "Timeless classic fit denim shorts for casual style",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://www.jiomart.com/images/product/original/rvvoncqmam/campus-sutra-men-s-classic-blue-dark-washed-regular-fit-denim-shorts-product-images-rvvoncqmam-0-202402071913.jpg?im=Resize=(500,630)",
                        special: false,
                        sizes: ['30', '32', '34']
                    },{
                            id: 150,
                            name: "Everyday Chino Shorts",
                            description: "Versatile everyday chino shorts for casual outings",
                            price: 899,
                            originalPrice: 1299,
                            image: "https://hips.hearstapps.com/hmg-prod/images/mhl-shorts-octobre-547-67f416b1a6ccd.jpg?crop=0.503xw:1.00xh;0.250xw,0&resize=1120:*",
                            special: false,
                            sizes: ['30', '32', '34']
                    },{
                        id: 151,
                        name: "Stretch Woven Chino Shorts",
                        description: "Comfortable stretch woven chino shorts for all-day wear",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://m.media-amazon.com/images/I/61zbGbHZ4AL._UY1100_.jpg",
                        special: true,
                        sizes: ['30', '32', '34']
                    },{
                        id: 152,
                        name: "Ventilated Mesh Athletic Shorts",
                        description: "Ventilated mesh athletic shorts for maximum comfort during workouts",
                        price: 699,
                        originalPrice: 999,
                        image: "https://m.media-amazon.com/images/I/615Cafj6N7L._UY350_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 153,
                        name: "Denim Bermuda Shorts",
                        description: "Comfortable denim bermuda shorts for a casual look",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://m.media-amazon.com/images/I/813aghZvEYL._UY1100_.jpg",
                        special: true,
                        sizes: ['30', '32', '34']
                    },{
                        id: 154,
                        name: "Multi-Pocket Cargo Shorts",
                        description: "Functional multi-pocket cargo shorts for outdoor activities",
                        price: 999,
                        originalPrice: 1399,
                        image: "https://i.pinimg.com/564x/84/23/bd/8423bd9f84110e73100030671badad44.jpg",
                        special: false,
                        sizes: ['30', '32', '34']
                    },{
                        id: 155,
                        name: "Casual Fit Chino Shorts",
                        description: "Relaxed casual fit chino shorts for everyday comfort",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://m.media-amazon.com/images/I/51czgGsNFZL._UY1100_.jpg",
                        special: true,
                        sizes: ['30', '32', '34']
                    },{
                        id: 156,
                        name: "Lightweight Performance Athletic Shorts",
                        description: "Lightweight performance athletic shorts for active wear",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://m.media-amazon.com/images/I/61-pRSkpxJL._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 157,
                        name: "Rugged Denim Shorts",
                        description: "Durable rugged denim shorts for outdoor adventures",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://m.media-amazon.com/images/I/81nHNfZtSnL._UY1000_.jpg",
                        special: true,
                        sizes: ['30', '32', '34']
                    },{
                        id: 158,
                        name: "Classic Fit Denim Shorts",
                        description: "Timeless classic fit denim shorts for all occasions",
                        price: 999,
                        originalPrice: 1399,
                        image: "https://assets.ajio.com/medias/sys_master/root/20240501/bQoL/663284bc16fd2c6e6adf962a/-473Wx593H-467291368-blue-MODEL.jpg",
                        special: false,
                        sizes: ['30', '32', '34']
                    },
                    {
                        id: 159,
                        name: "Everyday Stretch Chino Shorts",
                        description: "Comfortable everyday stretch chino shorts for casual wear",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://m.media-amazon.com/images/I/51czgGsNFZL._UY1100_.jpg",
                        special: true,
                        sizes: ['30', '32', '34']
                    },{
                        id: 160,
                        name: "Breathable Athletic Shorts",
                        description: "Breathable athletic shorts for enhanced comfort during workouts",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://m.media-amazon.com/images/I/51Ig-Ov78pL._SR290,290_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                ],
                innerwear: [
                    {
                        id: 161,
                        name: "Cotton Boxers (Pack of 3)",
                        description: "Comfortable cotton boxers for everyday wear",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://m.media-amazon.com/images/I/616u-Df0xrL._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 162,
                        name: "Breathable Trunks (Pack of 3)",
                        description: "Breathable trunks for all-day comfort",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://images-cdn.ubuy.qa/6562d988f2c68b3ab141fae9-david-archy-men-39-s-soft-trunks.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 163,
                        name: "Stretch Briefs (Pack of 3)",
                        description: "Stretch briefs for a snug fit",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://m.media-amazon.com/images/I/513hM0W8V4L._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 164,
                        name: "Athletic Boxer Briefs (Pack of 3)",
                        description: "Athletic boxer briefs for active wear",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://m.media-amazon.com/images/I/61Dern0WwRS._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 165,
                        name: "Modal Boxer Briefs (Pack of 3)",
                        description: "Soft modal boxer briefs for ultimate comfort",
                        price: 1199,
                        originalPrice: 1699,
                        image: "https://m.media-amazon.com/images/I/71vmbK+BBEL._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 166,
                        name: "Seamless Trunks (Pack of 3)",
                        description: "Seamless trunks for a smooth fit",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://m.media-amazon.com/images/I/41K-k8UtG6L._UY350_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 167,
                        name: "Cotton Stretch Boxers (Pack of 3)",
                        description: "Cotton stretch boxers for a comfortable fit",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://www.nautica.com/dw/image/v2/BDCV_PRD/on/demandware.static/-/Sites-nautica-master-catalog/default/dwd4d07cd7/images/0731516000016_X61304_1304_676_A.jpg?sw=2000&sh=2000&sm=fit",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 168,
                        name: "Breathable Cotton Briefs (Pack of 3)",
                        description: "Breathable cotton briefs for everyday comfort",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://m.media-amazon.com/images/I/413Q+CkzB7L._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 169,
                        name: "Athletic Performance Boxer Briefs (Pack of 3)",
                        description: "Athletic performance boxer briefs for active lifestyles",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://m.media-amazon.com/images/I/81BgkHVjccL.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                    {
                        id: 170,
                        name: "Seamless Cotton Boxer Briefs (Pack of 3)",
                        description: "Seamless cotton boxer briefs for a smooth and comfortable fit",
                        price: 1199,
                        originalPrice: 1699,
                        image: "https://m.media-amazon.com/images/I/41xgoQvDmyL._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 171,
                        name: "Modal Stretch Trunks (Pack of 3)",
                        description: "Soft modal stretch trunks for ultimate comfort",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://m.media-amazon.com/images/I/71GBorz8wML._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 172,
                        name: "Cotton Athletic Boxer Briefs (Pack of 3)",
                        description: "Cotton athletic boxer briefs for active wear",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://m.media-amazon.com/images/I/612DHkdLPIS._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 173,
                        name: "Breathable Modal Boxer Briefs (Pack of 3)",
                        description: "Breathable modal boxer briefs for all-day comfort",
                        price: 1199,
                        originalPrice: 1699,
                        image: "https://m.media-amazon.com/images/I/51dN81RM+PL._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 174,
                        name: "Seamless Athletic Trunks (Pack of 3)",
                        description: "Seamless athletic trunks for a smooth fit during workouts",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://images.meesho.com/images/products/199063948/bt1re_512.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 175,
                        name: "Cotton Performance Boxer Briefs (Pack of 3)",
                        description: "Cotton performance boxer briefs for active lifestyles",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://m.media-amazon.com/images/I/61lfzDQ+VcL.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 176,
                        name: "Modal Seamless Boxer Briefs (Pack of 3)",
                        description: "Soft modal seamless boxer briefs for ultimate comfort",
                        price: 1199,
                        originalPrice: 1699,
                        image: "https://m.media-amazon.com/images/I/41vN7qoEPfL._SL500_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 177,
                        name: "Breathable Athletic Boxer Briefs (Pack of 3)",
                        description: "Breathable athletic boxer briefs for active wear",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqbIQcD5fBgXHnBlU-7O7cY1SSYQxrpl1JQ&s",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 178,
                        name: "Seamless Performance Trunks (Pack of 3)",
                        description: "Seamless performance trunks for a smooth fit during workouts",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKi50M2c9lY8dk_WS9IP8UAzcZEU-T495bRQ&s",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 179,
                        name: "Cotton Seamless Boxer Briefs (Pack of 3)",
                        description: "Cotton seamless boxer briefs for a smooth and comfortable fit",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://m.media-amazon.com/images/I/61d85+s0SsL._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L', 'XL']
                    },{
                        id: 180,
                        name: "Modal Athletic Trunks (Pack of 3)",
                        description: "Soft modal athletic trunks for ultimate comfort during workouts",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://m.media-amazon.com/images/I/61vxXJPTm8L._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L', 'XL']
                    },
                ]
            },
            women: {
                kurtis: [
                    {
                        id: 181,
                        name: "Embroidered Kurti",
                        description: "Beautiful embroidered kurti for traditional occasions",
                        price: 1299,
                        originalPrice: 1999,
                        image: "https://m.media-amazon.com/images/I/615y9QuBjhL._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 182,
                        name: "Printed Kurti",
                        description: "Colorful printed kurti for casual wear",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://images.jdmagicbox.com/quickquotes/images_main/printed-kurti-for-women-2008003957-dy21qvl1.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 183,
                        name: "Anarkali Kurti",
                        description: "Elegant Anarkali kurti for festive occasions",
                        price: 1599,
                        originalPrice: 2299,
                        image: "https://ahika.in/cdn/shop/products/SMP01783.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 184,
                        name: "Cotton Kurti",
                        description: "Comfortable cotton kurti for everyday wear",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://m.media-amazon.com/images/I/81SG-2z5siL._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 185,
                        name: "Silk Kurti",
                        description: "Luxurious silk kurti for special occasions",
                        price: 1999,
                        originalPrice: 2999,
                        image: "https://www.libas.in/cdn/shop/files/maroon-yoke-design-silk-kurta-libas-1-27530804854934.jpg?v=1756184929",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 186,
                        name: "Georgette Kurti",
                        description: "Stylish georgette kurti for parties and events",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://www.sareespalace.com/image/cache/data-2024/designer-kurti-for-party-299421-1000x1375.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 187,
                        name: "Rayon Kurti",
                        description: "Lightweight rayon kurti for summer days",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://i.pinimg.com/564x/a9/e2/8b/a9e28b76ead0c6086e30aeececd9fbb4.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 188,
                        name: "Linen Kurti",
                        description: "Breathable linen kurti for a casual look",
                        price: 1199,
                        originalPrice: 1699,
                        image: "https://m.media-amazon.com/images/I/61d0srY9GSL._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 189,
                        name: "Chiffon Kurti",
                        description: "Elegant chiffon kurti for formal occasions",
                        price: 1599,
                        originalPrice: 2299,
                        image: "https://i.pinimg.com/236x/d1/98/5e/d1985eeae11c480a42915c91a771baa2.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 190,
                        name: "Denim Kurti",
                        description: "Trendy denim kurti for a modern look",
                        price: 1399,
                        originalPrice: 1999,
                        image: "https://wforwoman.com/cdn/shop/files/20FEW13277-213184_1_320f91c0-f00f-4150-b2de-1faabc9248f7.jpg?v=1721322495",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 191,
                        name: "Velvet Kurti",
                        description: "Rich velvet kurti for winter festivities",
                        price: 1799,
                        originalPrice: 2499,
                        image: "https://sukritistore.com/cdn/shop/files/velvet-suit-set-with-mirror-and-cut-dana-work-zari-embroidered-kurta.jpg?v=1726584131",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 192,
                        name: "Embroidered Kurti with Palazzo",
                        description: "Beautiful embroidered kurti paired with palazzo pants",
                        price: 2499,
                        originalPrice: 3499,
                        image: "https://staticm247.kalkifashion.com/media/catalog/product/o/n/onion-pink-embroidered-kurti-palazzo-set-with-dupattakalki-sg225678-1.jpg?w=500",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 193,
                        name: "Printed Kurti with Leggings",
                        description: "Colorful printed kurti paired with comfortable leggings",
                        price: 1999,
                        originalPrice: 2799,
                        image: "https://wforwoman.com/cdn/shop/files/23FEWS18439-121009.jpg?v=1752555113",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 194,
                        name: "Anarkali Kurti with Churidar",
                        description: "Elegant Anarkali kurti paired with churidar pants",
                        price: 2999,
                        originalPrice: 3999,
                        image: "https://wforwoman.com/cdn/shop/files/24AUSP10922-400556_1_61070ffb-9c77-4008-8f0c-73b0612dbecd.jpg?v=1726123937",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 195,
                        name: "Cotton Kurti with Palazzo",
                        description: "Comfortable cotton kurti paired with palazzo pants",
                        price: 1799,
                        originalPrice: 2499,
                        image: "https://sukritistore.com/cdn/shop/files/1_16d7144c-f967-41c5-9ae7-f6be4327e52f.jpg?v=1714477109",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 196,
                        name: "Silk Kurti with Skirt",
                        description: "Luxurious silk kurti paired with a flowing skirt",
                        price: 3499,
                        originalPrice: 4999,
                        image: "https://odhni.com/cdn/shop/files/24_9ef283e8-d9c4-44fb-b9f6-9b829665942c.jpg?v=1718380246",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 197,
                        name: "Georgette Kurti with Leggings",
                        description: "Stylish georgette kurti paired with comfortable leggings",
                        price: 2199,
                        originalPrice: 2999,
                        image: "https://m.media-amazon.com/images/I/71o6igv+yjL._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 198,
                        name: "Rayon Kurti with Jeans",
                        description: "Lightweight rayon kurti paired with trendy jeans",
                        price: 1999,
                        originalPrice: 2799,
                        image: "https://www.kashmirorigin.com/cdn/shop/files/18-1-jpg_8afa6ae6-964c-4ccf-b2a9-6bd916aefdc7.webp?v=1726698657",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 199,
                        name: "Linen Kurti with Skirt",
                        description: "Breathable linen kurti paired with a casual skirt",
                        price: 1899,
                        originalPrice: 2599,
                        image: "https://assets0.mirraw.com/images/8811600/gotaset-levander2_zoom.jpg?1688212670",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 200,
                        name: "Chiffon Kurti with Palazzo",
                        description: "Elegant chiffon kurti paired with palazzo pants",
                        price: 2499,
                        originalPrice: 3499,
                        image: "https://ambraee.com/cdn/shop/products/Project_20230221_0165.jpg?v=1691225112",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 201,
                        name: "Denim Kurti with Leggings",
                        description: "Trendy denim kurti paired with comfortable leggings",
                        price: 2199,
                        originalPrice: 2999,
                        image: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/VH/KR/130204474/ladies-denim-kurti-500x500.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 202,
                        name: "Velvet Kurti with Skirt",
                        description: "Rich velvet kurti paired with a flowing skirt",
                        price: 2799,
                        originalPrice: 3799,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtTMiMLkk--9AG4TDsLMGuGqVboonq_lyLw&s",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 203,
                        name: "Embroidered Kurti with Jeans",
                        description: "Beautiful embroidered kurti paired with trendy jeans",
                        price: 1999,
                        originalPrice: 2799,
                        image: "https://fashor.com/cdn/shop/files/25641_11.jpg?v=1735233275&width=1445",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 204,
                        name: "Printed Kurti with Skirt",
                        description: "Colorful printed kurti paired with a casual skirt",
                        price: 1799,
                        originalPrice: 2499,
                        image: "https://5.imimg.com/data5/SELLER/Default/2023/8/338755216/FJ/NQ/HI/180525378/img-20230824-wa0077-500x500.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 205,
                        name: "Anarkali Kurti with Palazzo",
                        description: "Elegant Anarkali kurti paired with palazzo pants",
                        price: 2999,
                        originalPrice: 3999,
                        image: "https://cotlandfashions.com/cdn/shop/files/CFPL-0397_1_Copy.jpg?v=1738837411",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 206,
                        name: "Cotton Kurti with Jeans",
                        description: "Comfortable cotton kurti paired with trendy jeans",
                        price: 1599,
                        originalPrice: 2299,
                        image: "https://vastarathelabel.com/cdn/shop/files/ShivXVastra-85.jpg?v=1756116599",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 207,
                        name: "Silk Kurti with Leggings",
                        description: "Luxurious silk kurti paired with comfortable leggings",
                        price: 3499,
                        originalPrice: 4999,
                        image: "https://wforwoman.com/cdn/shop/files/22AUWS17952-118936.jpg?v=1753188528",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 208,
                        name: "Georgette Kurti with Skirt",
                        description: "Stylish georgette kurti paired with a flowing skirt",
                        price: 2199,
                        originalPrice: 2999,
                        image: "https://i.pinimg.com/474x/24/cf/74/24cf74b730b062bb30a25c3a7667a699.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 209,
                        name: "Rayon Kurti with Palazzo",
                        description: "Lightweight rayon kurti paired with palazzo pants",
                        price: 1899,
                        originalPrice: 2599,
                        image: "https://www.fashonice.com/cdn/shop/files/ifoto-ai_1723302769076_1200x.jpg?v=1723990632",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 210,
                        name: "Linen Kurti with Jeans",
                        description: "Breathable linen kurti paired with trendy jeans",
                        price: 1699,
                        originalPrice: 2299,
                        image: "https://varanga.in/cdn/shop/files/vkur1965_7_4983a2b6-bee5-4a4a-af45-1df4429ecc9c.jpg?v=1726366637",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 211,
                        name: "Chiffon Kurti with Leggings",
                        description: "Elegant chiffon kurti paired with comfortable leggings",
                        price: 2299,
                        originalPrice: 3199,
                        image: "https://assets0.mirraw.com/images/12565217/image_zoom.jpeg?1718620505",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 212,
                        name: "Denim Kurti with Skirt",
                        description: "Trendy denim kurti paired with a casual skirt",
                        price: 1999,
                        originalPrice: 2799,
                        image: "https://m.media-amazon.com/images/I/71ZDCiRzUFL._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 213,
                        name: "Velvet Kurti with Palazzo",
                        description: "Rich velvet kurti paired with palazzo pants",
                        price: 2599,
                        originalPrice: 3599,
                        image: "https://www.soosi.co.in/cdn/shop/products/WhatsApp_Image_2019-11-04_at_21.32.15.jpg?v=1572974977",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 214,
                        name: "Embroidered Kurti with Leggings",
                        description: "Beautiful embroidered kurti paired with comfortable leggings",
                        price: 1799,
                        originalPrice: 2499,
                        image: "https://5.imimg.com/data5/SELLER/Default/2023/10/350813718/KO/ZN/BH/8626646/vredevogel-women-kurta-and-leggings-dupatta-set.webp",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 215,
                        name: "Printed Kurti with Jeans",
                        description: "Colorful printed kurti paired with trendy jeans",
                        price: 1599,
                        originalPrice: 2299,
                        image: "https://www.biba.in/on/demandware.static/-/Sites-biba-product-catalog/default/dw4264d5c2/images/aw23/crpku19656aw23denblu_1.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 216,
                        name: "Anarkali Kurti with Skirt",
                        description: "Elegant Anarkali kurti paired with a flowing skirt",
                        price: 2799,
                        originalPrice: 3799,
                        image: "https://shopforaurelia.com/cdn/shop/files/24AUD10658-E705029.jpg?v=1727700876",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 217,
                        name: "Cotton Kurti with Skirt",
                        description: "Comfortable cotton kurti paired with a casual skirt",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://thesvaya.com/cdn/shop/products/5_e1b627d1-c22a-4e01-bc18-398c7a53188d.png?v=1751101356",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 218,
                        name: "Silk Kurti with Palazzo",
                        description: "Luxurious silk kurti paired with palazzo pants",
                        price: 3299,
                        originalPrice: 4599,
                        image: "https://m.media-amazon.com/images/I/71dZPZElEtL._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 219,
                        name: "Georgette Kurti with Jeans",
                        description: "Stylish georgette kurti paired with trendy jeans",
                        price: 1999,
                        originalPrice: 2799,
                        image: "https://i.pinimg.com/474x/ea/70/a9/ea70a9cacbb5d48b6895a1744016ac9e.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 220,
                        name: "Rayon Kurti with Skirt",
                        description: "Lightweight rayon kurti paired with a flowing skirt",
                        price: 1699,
                        originalPrice: 2299,
                        image: "https://assets0.mirraw.com/images/8494485/IMG_0472_zoom.jpg?1606492711",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },
                ],
                tops: [
                    {
                        id: 221,
                        name: "Casual Top",
                        description: "Comfortable casual top for everyday wear",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://stylequotient.co.in/cdn/shop/products/22391504_1.jpg?v=1679458962",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 222,
                        name: "Party Top",
                        description: "Stylish party top for special occasions",
                        price: 1199,
                        originalPrice: 1799,
                        image: "https://5.imimg.com/data5/SELLER/Default/2022/12/JZ/BD/LN/28065107/womens-party-tops.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 223,
                        name: "Formal Top",
                        description: "Elegant formal top for office wear",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/29793346/2024/5/27/91251212-4907-4e5b-a3ed-8bc85917c91f1716807800548FITHUBShirtStyleTop1.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 224,
                        name: "Sleeveless Top",
                        description: "Cool sleeveless top for summer days",
                        price: 699,
                        originalPrice: 999,
                        image: "https://assets.ajio.com/medias/sys_master/root/20231005/uELG/651ebe04ddf77915192180ff/-473Wx593H-466677254-green-MODEL.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 225,
                        name: "Crop Top",
                        description: "Trendy crop top for a casual look",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://sassafras.in/cdn/shop/products/SFTOPS40770-1.jpg?v=1757069062",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 226,
                        name: "Off-Shoulder Top",
                        description: "Chic off-shoulder top for a stylish appearance",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://m.media-amazon.com/images/I/819+noqHx7L._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 227,
                        name: "Peplum Top",
                        description: "Flattering peplum top for a feminine look",
                        price: 1199,
                        originalPrice: 1799,
                        image: "https://sassafras.in/cdn/shop/products/SFTOPS41332-1.jpg?v=1757068342",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 228,
                        name: "Ruffled Top",
                        description: "Playful ruffled top for a fun vibe",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/29760970/2024/9/16/95d225a9-95c2-4226-a60f-b1f98eb81bb91726489139034-DressBerry-Women-Tops-3041726489138580-1.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 229,
                        name: "Button-Down Top",
                        description: "Classic button-down top for a polished look",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://www.missprintclothing.com/cdn/shop/products/Full_Sleeves_Button_Down_Blue_Shirt_Style_Top.JPG?v=1547713882&width=2232",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 230,
                        name: "Halter Neck Top",
                        description: "Elegant halter neck top for a sophisticated style",
                        price: 1299,
                        originalPrice: 1899,
                        image: "https://assets.ajio.com/medias/sys_master/root/20241023/2AQL/67190dec260f9c41e8964a24/-473Wx593H-700628763-red-MODEL.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 231,
                        name: "Tie-Front Top",
                        description: "Casual tie-front top for a relaxed look",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://topstopph.com/cdn/shop/files/IMG-8190_300x.jpg?v=1742860224",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 232,
                        name: "Wrap Top",
                        description: "Flattering wrap top for a chic appearance",
                        price: 1199,
                        originalPrice: 1799,
                        image: "https://assets.ajio.com/medias/sys_master/root/20230630/wHPa/649f0207a9b42d15c92e0968/-473Wx593H-466323045-brown-MODEL.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 233,
                        name: "Sleeve Detail Top",
                        description: "Stylish sleeve detail top for a trendy look",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://sassafras.in/cdn/shop/products/SFTOPS41483-1_a1e5a16d-1c5b-4ae2-8f0e-2f2340589e8d_1800x.jpg?v=1755768906",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 234,
                        name: "High-Low Top",
                        description: "Fashionable high-low top for a modern style",
                        price: 1299,
                        originalPrice: 1899,
                        image: "https://m.media-amazon.com/images/I/61o7IJkwLjL._UY350_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 235,
                        name: "Cowl Neck Top",
                        description: "Elegant cowl neck top for a sophisticated look",
                        price: 1399,
                        originalPrice: 1999,
                        image: "https://media-us.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000013604582-Green-GREEN-1000013604582_01-2100.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 236,
                        name: "Cold Shoulder Top",
                        description: "Trendy cold shoulder top for a stylish vibe",
                        price: 1199,
                        originalPrice: 1799,
                        image: "https://images.meesho.com/images/products/402272081/ucnxa_512.webp?width=512",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 237,
                        name: "Embellished Top",
                        description: "Glamorous embellished top for festive occasions",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/28589358/2024/3/30/5df2377c-d992-4b33-9841-3bbc363d588f1711792161301KazoPrintPuffSleeveTop1.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 238,
                        name: "Mesh Insert Top",
                        description: "Sporty mesh insert top for an active look",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://img.shopstyle-cdn.com/sim/2c/fb/2cfb9c234dabdaeb1d71fb06945dac7b_best/allegra-k-womens-st-patricks-day-swiss-dots-chiffon-blouse-long-sleeve-ruffled-work-office-shirt-top.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 239,
                        name: "Bell Sleeve Top",
                        description: "Bohemian bell sleeve top for a free-spirited style",
                        price: 1299,
                        originalPrice: 1899,
                        image: "https://static.cilory.com/740799-thickbox_default/pink-bell-sleeves-casual-cropped-top.jpg.webp",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 240,
                        name: "Asymmetrical Hem Top",
                        description: "Unique asymmetrical hem top for a fashion-forward look",
                        price: 1399,
                        originalPrice: 1999,
                        image: "https://assets.ajio.com/medias/sys_master/root/20241003/C7Zq/66fe731bf9b8ef490b8f415e/-473Wx593H-700206047-maroon-MODEL.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 241,
                        name: "Peasant Top",
                        description: "Relaxed peasant top for a casual, boho vibe",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMK6y7TUzmAbCr4Bo4MGUTC1MZ4BXX-n0-w&s",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 242,
                        name: "Smocked Top",
                        description: "Comfortable smocked top for a snug fit",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/28577916/2024/3/29/ede3777c-d990-4848-94d2-da85f3437a591711714772313TrendArrestPuffSleeveCropTop1.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 243,
                        name: "Tunic Top",
                        description: "Versatile tunic top for layering or standalone wear",
                        price: 1199,
                        originalPrice: 1799,
                        image: "https://www.ekisha.co.in/cdn/shop/files/3_c314493e-24f4-43e9-83bd-19d0f48e92e2.jpg?v=1744566795",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 244,
                        name: "V-Neck Top",
                        description: "Classic v-neck top for a flattering neckline",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://sassafras.in/cdn/shop/files/SFTOPS42075-1_f35548fd-f394-401f-b09a-fada983273d2.jpg?v=1757059072",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 245,
                        name: "Graphic Top",
                        description: "Fun graphic top for a playful look",
                        price: 799,
                        originalPrice: 1199,
                        image: "https://m.media-amazon.com/images/I/4196G4cqWyL._SY1000_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 246,
                        name: "Button-Up Top",
                        description: "Casual button-up top for a laid-back style",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://oxolloxo.com/cdn/shop/files/S25092WSH001_1.webp?v=1755069451",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 247,
                        name: "Sleeve Tie Top",
                        description: "Chic sleeve tie top for a trendy appearance",
                        price: 1199,
                        originalPrice: 1799,
                        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/29893879/2024/7/4/c6f5aae1-fe17-44b4-80c0-8356f34b850b1720091731520-DressBerry-Women-Tops-2331720091731075-1.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 248,
                        name: "Lace Trim Top",
                        description: "Feminine lace trim top for a delicate look",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://assets.sheinindia.in/medias/shein_sys_master/root/20250425/elB7/680b41177a6cd4182ff46eef/-473Wx593H-443322579-black-MODEL.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 249,
                        name: "Metallic Top",
                        description: "Glamorous metallic top for festive occasions",
                        price: 1399,
                        originalPrice: 1999,
                        image: "https://assets.ajio.com/medias/sys_master/root/20231208/Uenf/657239e9ddf7791519ba6124/-473Wx593H-466863242-blue-MODEL.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 250,
                        name: "Fringe Top",
                        description: "Playful fringe top for a fun and flirty look",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://misverse.in/cdn/shop/files/IMGL0175_fd2a23ec-4a55-4807-8331-0fbf8f657927.jpg?v=1709111087&width=1445",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 251,
                        name: "Pleated Top",
                        description: "Elegant pleated top for a sophisticated style",
                        price: 1299,
                        originalPrice: 1899,
                        image: "https://bananarepublicfactory.gapfactory.com/webcontent/0056/600/942/cn56600942.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 252,
                        name: "Sequin Top",
                        description: "Sparkling sequin top for a glamorous look",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://5.imimg.com/data5/SELLER/Default/2023/6/316764987/MU/QA/NN/191378859/women-s-net-party-top-casual-sequence-party-tops-500x500.png",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 253,
                        name: "Tie-Dye Top",
                        description: "Colorful tie-dye top for a vibrant style",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://www.nyaro.in/cdn/shop/files/DSC01311_2048x.jpg?v=1743685625",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 254,
                        name: "Velvet Top",
                        description: "Luxurious velvet top for a rich look",
                        price: 1399,
                        originalPrice: 1999,
                        image: "https://www.lakshita.com/cdn/shop/files/LakshitaFestiveContinued183.jpg?v=1753340556",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 255,
                        name: "Wrap Front Top",
                        description: "Chic wrap front top for a flattering silhouette",
                        price: 1199,
                        originalPrice: 1799,
                        image: "https://www.forevernew.co.in//pub/media/catalog/product/o/l/oldimlall_onbody_28775901_f.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 256,
                        name: "Zebra Print Top",
                        description: "Bold zebra print top for a statement look",
                        price: 1299,
                        originalPrice: 1899,
                        image: "https://m.media-amazon.com/images/I/615HpGAIY4L._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 257,
                        name: "Floral Print Top",
                        description: "Pretty floral print top for a feminine touch",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://assets.ajio.com/medias/sys_master/root/20230602/g3TS/647921e742f9e729d70a43bc/-1117Wx1400H-461207102-pink-MODEL4.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 258,
                        name: "Animal Print Top",
                        description: "Edgy animal print top for a wild look",
                        price: 1199,
                        originalPrice: 1799,
                        image: "https://fyva.in/cdn/shop/files/4I2A5158.jpg?v=1699598936&width=650",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 259,
                        name: "Polka Dot Top",
                        description: "Fun polka dot top for a playful style",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/31123336/2025/1/10/348a1eda-71c7-4fb1-9d10-443b51c34a9e1736509995952-DressBerry-Women-Tops-6551736509995356-1.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 260,
                        name: "Striped Top",
                        description: "Classic striped top for a timeless look",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/30108334/2024/7/3/64d037f7-e7cf-4ac1-aa01-21ea07f6e0a61720024328772AnoukStripedCottonShirtStyleTop1.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },
                ],
                sarees: [
                    {
                        id: 261,
                        name: "Silk Saree",
                        description: "Elegant silk saree for special occasions",
                        price: 3499,
                        originalPrice: 4999,
                        image: "https://rukminim2.flixcart.com/image/704/844/xif0q/sari/k/1/c/free-aa-40100-1st-stitch-fab-unstitched-original-imagzrwcjdqg5pys.jpeg?q=90&crop=false",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 262,
                        name: "Cotton Saree",
                        description: "Comfortable cotton saree for everyday wear",
                        price: 1999,
                        originalPrice: 2999,
                        image: "https://img.faballey.com/images/Product/XSR03639C/3.jpg",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 263,
                        name: "Georgette Saree",
                        description: "Lightweight georgette saree for a stylish look",
                        price: 2499,
                        originalPrice: 3499,
                        image: "https://www.anantexports.in/cdn/shop/files/1007-a8de1054-ca12-4f8d-8aa8-af0b9d14a644.jpg?v=1728414572&width=1024",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 264,
                        name: "Chiffon Saree",
                        description: "Elegant chiffon saree for a graceful appearance",
                        price: 2799,
                        originalPrice: 3999,
                        image: "https://cdn.shopify.com/s/files/1/0333/0893/4280/products/designer-blue-printed-chiffon-saree-for-women-with-blouse-stilento-1.jpg?v=1662794284",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 265,
                        name: "Designer Saree",
                        description: "Luxurious designer saree for weddings and parties",
                        price: 4999,
                        originalPrice: 6999,
                        image: "https://cdn.shopify.com/s/files/1/0798/8353/4625/files/women-designer-saree-saree-for-women_480x480.webp?v=1695976902",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 266,
                        name: "Linen Saree",
                        description: "Breathable linen saree for a comfortable fit",
                        price: 2199,
                        originalPrice: 3199,
                        image: "https://5.imimg.com/data5/ECOM/Default/2024/5/417609461/OK/ZG/EJ/140086710/lsan00-4-253fdd3d-2871-42a6-8045-83f55e12af8a-500x500.jpg",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 267,
                        name: "Banarasi Saree",
                        description: "Traditional Banarasi saree with intricate designs",
                        price: 5999,
                        originalPrice: 7999,
                        image: "https://sudathi.com/cdn/shop/files/4339S685_1.jpg?v=1756404671&width=1500",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 268,
                        name: "Kanjeevaram Saree",
                        description: "Rich Kanjeevaram saree for grand occasions",
                        price: 6999,
                        originalPrice: 9999,
                        image: "https://clothsvilla.com/cdn/shop/products/B-Vipul-Spatmina-B_3_1024x1024.jpg?v=1698124149",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 269,
                        name: "Net Saree",
                        description: "Stylish net saree with embellishments",
                        price: 2999,
                        originalPrice: 3999,
                        image: "https://pictures.kartmax.in/live/cover/600x800/sites/9s145MyZrWdIAwpU0JYS/product-images/red_soft_net_saree_with_sparkle_hand_finish_175136018725408.jpg",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 270,
                        name: "Printed Saree",
                        description: "Vibrant printed saree for a casual look",
                        price: 1599,
                        originalPrice: 2299,
                        image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/22751732/2023/4/13/cbc93b2d-4a2a-4193-a0cc-b4505ae2bae81681350302616KALINIOffWhiteBhagalpuriSilkEthnicPrintedFestiveSareewithMat1.jpg",
                        special: false, 
                        sizes: ['Free Size']
                    },{
                        id: 271,
                        name: "Embroidered Saree",
                        description: "Beautiful embroidered saree for festive occasions",
                        price: 3499,
                        originalPrice: 4999,
                        image: "https://mysilklove.com/cdn/shop/files/msl-d1_5aca895b-5d0a-4cb8-ad47-e346a7584191.jpg?v=1702461482&width=2048",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 272,
                        name: "Tussar Silk Saree",
                        description: "Elegant tussar silk saree for a traditional look",
                        price: 3999,
                        originalPrice: 5499,
                        image: "https://assets0.mirraw.com/images/9380669/image_zoom.jpeg?1628279454",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 273,
                        name: "Chanderi Saree",
                        description: "Lightweight chanderi saree for a graceful appearance",
                        price: 2599,
                        originalPrice: 3699,
                        image: "https://cdn.shopify.com/s/files/1/0308/7286/2764/products/handblock-print-chanderi-silk-saree-629875.jpg?v=1646199829",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 274,
                        name: "Paithani Saree",
                        description: "Traditional Paithani saree with rich zari work",
                        price: 7999,
                        originalPrice: 10999,
                        image: "https://assets0.mirraw.com/images/12950009/image_zoom.jpeg?1732013996",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 275,
                        name: "Mysore Silk Saree",
                        description: "Luxurious Mysore silk saree for grand occasions",
                        price: 6499,
                        originalPrice: 8999,
                        image: "https://www.blieveme.com/wp-content/uploads/2023/01/Mysore-Silk-Saree-Gallery-Image-2.jpeg",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 276,
                        name: "Bhagalpuri Silk Saree",
                        description: "Elegant Bhagalpuri silk saree for a sophisticated look",
                        price: 4599,
                        originalPrice: 6499,
                        image: "https://saundaryamfashions.com/cdn/shop/files/43308-1.jpg?v=1696672715",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 277,
                        name: "Velvet Saree",
                        description: "Rich velvet saree for a royal appearance",
                        price: 5499,
                        originalPrice: 7499,
                        image: "https://alleyesoverhere.com/cdn/shop/files/LG-1572_4.jpg?v=1713516420",
                        special: false,
                        sizes: ['Free Size']
                    },
                    {
                        id: 278,
                        name: "Organza Saree",
                        description: "Light and airy organza saree for a delicate look",
                        price: 3199,
                        originalPrice: 4599,
                        image: "https://www.anantexports.in/cdn/shop/files/IMG-20240501_142628.jpg?v=1714553812&width=1946",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 279,
                        name: "Taffeta Saree",
                        description: "Smooth taffeta saree for a sleek appearance",
                        price: 2799,
                        originalPrice: 3999,
                        image: "https://assets.ajio.com/medias/sys_master/root/20240515/XWi5/6643c61905ac7d77bb5bd0a8/-473Wx593H-467333993-green-MODEL.jpg",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 280,
                        name: "Satin Saree",
                        description: "Shiny satin saree for a glamorous look",
                        price: 3399,
                        originalPrice: 4799,
                        image: "https://sudathi.com/cdn/shop/files/3111S418_3.jpg?v=1756403281&width=1500",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 281,
                        name: "Crepe Saree",
                        description: "Flowy crepe saree for a comfortable fit",
                        price: 2299,
                        originalPrice: 3299,
                        image: "https://peachmode.com/cdn/shop/files/1_JNX-RUCHI-VIVNT35-34201A-PEACHMODE.jpg?v=1721041797",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 282,
                        name: "Tissue Saree",
                        description: "Lightweight tissue saree for a festive look",
                        price: 2499,
                        originalPrice: 3499,
                        image: "https://hanfihandicraft.com/cdn/shop/files/393549925_287834970880575_7422002219366973030_n_600x800.jpg?v=1717524122",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 283,
                        name: "Handloom Saree",
                        description: "Authentic handloom saree for a traditional touch",
                        price: 3999,
                        originalPrice: 5499,
                        image: "https://sutisancha.com/cdn/shop/files/sutilogoaddfile_14.jpg?v=1723532156&width=2048",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 284,
                        name: "Bridal Saree",
                        description: "Exquisite bridal saree for the special day",
                        price: 9999,
                        originalPrice: 14999,
                        image: "https://i0.wp.com/www.sanskriticuttack.com/wp-content/uploads/2023/07/saree_in_half_saree_style.jpg?ssl=1",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 285,
                        name: "Party Wear Saree",
                        description: "Glamorous party wear saree for evening events",
                        price: 4599,
                        originalPrice: 6599,
                        image: "https://vootbuy.in/cdn/shop/files/WhatsAppImage2024-07-09at14.35.38_1.jpg?v=1720518446",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 286,
                        name: "Casual Saree",
                        description: "Comfortable casual saree for daily wear",
                        price: 1599,
                        originalPrice: 2299,
                        image: "https://www.sareespalace.com/image/cache/data-2024/blue-tussar-silk-printed-casual-saree-299460-1000x1375.jpg",
                        special: true,
                        sizes: ['Free Size']
                    }   ,{
                        id: 287,
                        name: "Gown Style Saree",
                        description: "Modern gown style saree for a fusion look",
                        price: 5499,
                        originalPrice: 7499,
                        image: "https://www.saajbyankita.com/cdn/shop/products/Saaj_22_0830copy.jpg?v=1663607421&width=1946",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 288,
                        name: "Cape Style Saree",
                        description: "Trendy cape style saree for a contemporary appearance",
                        price: 5999,
                        originalPrice: 8499,
                        image: "https://www.nidhikashekhar.in/cdn/shop/files/NSSE051_1.jpg?v=1753077303&width=2048",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 289,
                        name: "Ruffle Saree",
                        description: "Playful ruffle saree for a fun and flirty look",
                        price: 2799,
                        originalPrice: 3999,
                        image: "https://www.cdnensemble.xyz/pub/media/catalog/product/cache/391a5e1abf666a8c41861a6cd6227bf9/r/m/rmdl-08-1_1.jpg",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 290,
                        name: "Layered Saree",
                        description: "Stylish layered saree for a unique appearance",
                        price: 4999,
                        originalPrice: 6999,
                        image: "https://img2.ogaanindia.com/pub/media/catalog/product/cache/3f6619daccdb194398d06464ab49fa6e/p/h/ph22181.jpg",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 291,
                        name: "Pre-Draped Saree",
                        description: "Convenient pre-draped saree for easy wear",
                        price: 3499,
                        originalPrice: 4999,
                        image: "https://img.perniaspopupshop.com/catalog/product/s/o/SOPA122315_1.jpg?impolicy=detailimageprod",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 292,
                        name: "Half Saree",
                        description: "Traditional half saree for a cultural look",
                        price: 2599,
                        originalPrice: 3699,
                        image: "https://www.studio149fashion.com/cdn/shop/files/Untitled_design_2.png?v=1722065860&width=533",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 293,
                        name: "Dhoti Saree",
                        description: "Fusion dhoti saree for a trendy appearance",
                        price: 4599,
                        originalPrice: 6599,
                        image: "https://i.etsystatic.com/21102486/r/il/25fc04/5463272911/il_fullxfull.5463272911_plqr.jpg",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 294,
                        name: "Cape Saree",
                        description: "Elegant cape saree for a modern look",
                        price: 5999,
                        originalPrice: 8499,
                        image: "https://shopsanyagulati.com/cdn/shop/files/Styleisland-10-01-245380.jpg?v=1706682609",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 295,
                        name: "Peplum Saree",
                        description: "Chic peplum saree for a fashionable appearance",
                        price: 5299,
                        originalPrice: 7499,
                        image: "https://i.pinimg.com/736x/eb/37/6a/eb376a6054a5a193350e27246a8d9554.jpg",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 296,
                        name: "Jacket Style Saree",
                        description: "Trendy jacket style saree for a contemporary look",
                        price: 6499,
                        originalPrice: 8999,
                        image: "https://taruni.in/cdn/shop/files/TWFIW280_1.jpg?v=1734501070&width=2048",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 297,
                        name: "Dhoti Style Saree",
                        description: "Modern dhoti style saree for a fusion appearance",
                        price: 4799,
                        originalPrice: 6799,
                        image: "https://www.anokhifashions.com/VendorAssets/1033/StoreImages/Large/1582ROOHISKY.jpg",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 298,
                        name: "Gharara Saree",
                        description: "Traditional gharara saree for a cultural look",
                        price: 5599,
                        originalPrice: 7999,
                        image: "https://nehhanhata.in/cdn/shop/files/nehavaswani6238_pp.jpg?v=1705748365",
                        special: true,
                        sizes: ['Free Size']
                    },{
                        id: 299,
                        name: "Sharara Saree",
                        description: "Elegant sharara saree for festive occasions",
                        price: 5799,
                        originalPrice: 8299,
                        image: "https://img2.ogaanindia.com/pub/media/catalog/product/cache/3f6619daccdb194398d06464ab49fa6e/1/8/1823pink1.jpg",
                        special: false,
                        sizes: ['Free Size']
                    },{
                        id: 300,
                        name: "Anarkali Saree",
                        description: "Graceful anarkali saree for a royal appearance",
                        price: 6999,
                        originalPrice: 9999,
                        image: "https://www.bullionknot.com/cdn/shop/files/QueenBlue-01.jpg?v=1753957010",
                        special: true,
                        sizes: ['Free Size']
                    },
                ],
              
                sleepwear: [
                    {
                        id: 301,
                        name: "Silk Nightdress",
                        description: "Comfortable silk nightdress for sleeping",
                        price: 1199,
                        originalPrice: 1799,
                        image: "https://www.smartypants.co.in/cdn/shop/files/0S1A8806.jpg?v=1716636451",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 302,
                        name: "Cotton Pajama Set",
                        description: "Soft cotton pajama set for a good night's sleep",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://cottonworld.net/cdn/shop/files/L-PYJAMASUIT-17227-21071-PINK_4.jpg?v=1752584639",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 303,
                        name: "Flannel Nightgown",
                        description: "Warm flannel nightgown for cozy nights",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://m.media-amazon.com/images/I/71W8ymEB4mL._UY350_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 304,
                        name: "Lace Sleepwear Set",
                        description: "Elegant lace sleepwear set for a stylish look",
                        price: 1299,
                        originalPrice: 1899,
                        image: "https://m.media-amazon.com/images/I/71oQySsiDLL._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 305,
                        name: "Thermal Pajama Set",
                        description: "Cozy thermal pajama set for cold nights",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://images.meesho.com/images/products/450598434/0solm_512.webp?width=512",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 306,
                        name: "Satin Sleepwear",
                        description: "Luxurious satin sleepwear for a smooth feel",
                        price: 1399,
                        originalPrice: 1999,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPuDESUPiUAe5FADhyWuzEVW-kokxR7JQfA6Y3GFCCtiOmyBg-SzUsGSzTTN3DvU55z9Q&usqp=CAU",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 307,
                        name: "Hooded Robe",
                        description: "Warm hooded robe for lounging at home",
                        price: 1199,
                        originalPrice: 1699,
                        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/bath-robe/e/x/r/solid-cotton-bathrobes-1-11102023-lacylook-original-imagv429b9cgc36g.jpeg?q=90&crop=false",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 308,
                        name: "Short Nightdress",
                        description: "Light and airy short nightdress for summer nights",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://images.meesho.com/images/products/390059200/wsz68_512.webp?width=512",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 309,
                        name: "Long Pajama Set",
                        description: "Comfortable long pajama set for all seasons",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://www.myshoestore.co.uk/cdn/shop/files/SatinPyjamaNavy2_1500x.jpg?v=1728287167",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 310,
                        name: "Robe and Slipper Set",
                        description: "Cozy robe and slipper set for ultimate comfort",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://m.media-amazon.com/images/I/61RXgLILRbL._UF894,1000_QL80_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 311,
                        name: "Mesh Nightgown",
                        description: "Lightweight mesh nightgown for a breathable feel",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://s.alicdn.com/@sc04/kf/H105ac7b4a01948189eb3d6ed4addf57et.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 312,
                        name: "Embroidered Nightdress",
                        description: "Beautiful embroidered nightdress for a touch of elegance",
                        price: 1299,
                        originalPrice: 1899,
                        image: "https://images.meesho.com/images/products/228548853/c2a18_512.webp?width=512",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 313,
                        name: "Fleece Pajama Set",
                        description: "Warm fleece pajama set for chilly nights",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://www.klotthe.com/cdn/shop/files/1_91046a9e-0981-47f3-82da-1ec608538197_1445x.jpg?v=1706510437",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 314,
                        name: "Chiffon Sleepwear",
                        description: "Light and flowy chiffon sleepwear for a dreamy feel",
                        price: 1399,
                        originalPrice: 1999,
                        image: "https://image.made-in-china.com/202f0j00LIiqAtKlCHbD/Purple-Long-Sleeve-Pants-Loose-Chiffon-Sleepwear-Women-Sexy-Pajamas.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 315,
                        name: "Plush Robe",
                        description: "Soft plush robe for ultimate warmth and comfort",
                        price: 1199,
                        originalPrice: 1699,
                        image: "https://m.media-amazon.com/images/I/91u4ACrOGIL._UF894,1000_QL80_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 316,
                        name: "Sleeveless Nightdress",
                        description: "Cool and comfortable sleeveless nightdress for summer",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://www.thekaftancompany.com/cdn/shop/files/the-kaftan-company-negligee-striped-sweetheart-cotton-night-dress-45182406197546.jpg?v=1756835507&width=1080",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 317,
                        name: "Two-Piece Pajama Set",
                        description: "Classic two-piece pajama set for all-night comfort",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://m.media-amazon.com/images/I/71Lv-K+IB-L._UY350_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 318,
                        name: "Velvet Robe",
                        description: "Luxurious velvet robe for a touch of elegance",
                        price: 1499,
                        originalPrice: 2199,
                        image: "https://i.etsystatic.com/19230035/c/1620/1620/0/206/il/27236c/5500679765/il_300x300.5500679765_bcwx.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 319,
                        name: "Ruffled Nightgown",
                        description: "Charming ruffled nightgown for a feminine look",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://images-cdn.ubuy.co.in/63d5d569d7ff5714490b9896-ezi-women-s-satin-silk-ruffle-nightgown.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 320,
                        name: "Satin Pajama Set",
                        description: "Smooth satin pajama set for a luxurious feel",
                        price: 1199,
                        originalPrice: 1799,
                        image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/28646484/2024/5/6/baaf9483-4b0f-4b8a-9b14-469c3279ae341714985440371-Women-Nightsuits-7481714985439640-1.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },
                ],
                innerwear: [
                    {
                        id: 321,
                        name: "Cotton Panties (Pack of 5)",
                        description: "Comfortable cotton panties for everyday wear",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://m.media-amazon.com/images/I/812Y4rRlUWL._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 322,
                        name: "Lace Panties (Pack of 3)",
                        description: "Elegant lace panties for a feminine touch",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://m.media-amazon.com/images/I/710uc8GhQ3L._UY1100_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 323,
                        name: "Seamless Panties (Pack of 3)",
                        description: "Smooth seamless panties for a no-show look",
                        price: 999,
                        originalPrice: 1499,
                        image: "https://m.media-amazon.com/images/I/41WTuo2HHGL._UY1100_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 324,
                        name: "NYKD Everyday Wireless  ",
                        description: "Comfortable boyshorts for a sporty look",
                        price: 399,
                        originalPrice: 999,
                        image: "https://m.media-amazon.com/images/I/716nQ9uiTrL._SY550_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 325,
                        name: "HIRRNIK Women Cotton Padded Bra (Pack of 3)",
                        description: "Sexy thong panties for a daring look",
                        price: 499,
                        originalPrice: 999,
                        image: "https://m.media-amazon.com/images/I/61kq93iy93L._SX522_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 326,
                        name: "Clovia Women's Cotton Non-Padded Wire Free Full Cup T-Shirt Bra",
                        description: "Flattering high-waist panties for extra coverage",
                        price: 499,
                        originalPrice: 999,
                        image: "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-non-padded-non-wired-full-cup-t-shirt-bra-in-peach-colour-cotton-rich-3-171603.jpg?q=90",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 327,
                        name: "NYKD Everyday Wireless  (Pack of 2)",
                        description: "Soft cotton briefs for everyday comfort",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://m.media-amazon.com/images/I/71UeH30FLnL._SY550_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 328,
                        name: "Lace Women's Panties (Pack of 4)",
                        description: "Chic lace boyshorts for a stylish look",
                        price: 1099,
                        originalPrice: 1599,
                        image: "https://m.media-amazon.com/images/I/51rySxZeQ6L._SX425_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 329,
                        name: "Kaththai High Waist Body Shaper Briefs for Women ",
                        description: "Invisible seamless thong panties for a no-show look",
                        price: 499,
                        originalPrice: 899,
                        image: "https://m.media-amazon.com/images/I/61nwtlIGPXL._SX522_.jpg",
                        special: true,
                        sizes: ['S', 'M', 'L']
                    },{
                        id: 330,
                        name: "Cotton Hipster Panties (Pack of 4)",
                        description: "Comfortable cotton hipster panties for everyday wear",
                        price: 899,
                        originalPrice: 1299,
                        image: "https://m.media-amazon.com/images/I/71HRqoBaNCL._SX522_.jpg",
                        special: false,
                        sizes: ['S', 'M', 'L']
                    },
                ]
            },
            kids: {
                boys: {
                    bshirts: [
                        {
                id: 331,
                name: "Classic White Formal Shirt",
                description: "Crisp white shirt for formal events",
                price: 799,
                originalPrice: 1199,
                image: "https://5.imimg.com/data5/ANDROID/Default/2024/9/450998232/KP/NC/KV/20770002/product-jpeg-500x500.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 332,
                name: "Navy Blue Dress Shirt",
                description: "Elegant navy blue shirt for special occasions",
                price: 849,
                originalPrice: 1299,
                image: "https://www.mumkins.in/cdn/shop/products/5f3cb7bbb4681.jpg?v=1629355901&width=1080",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 333,
                name: "Light Blue Oxford Shirt",
                description: "Comfortable oxford shirt for school events",
                price: 749,
                originalPrice: 1099,
                image: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/Search/Lge/907584.jpg?im=Resize,width=450",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 334,
                name: "Striped Formal Shirt",
                description: "Vertical striped design for a sharp look",
                price: 899,
                originalPrice: 1399,
                image: "https://images.meesho.com/images/products/297440173/psguq_512.webp",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 335,
                name: "Checkered Dress Shirt",
                description: "Classic check pattern for a stylish appearance",
                price: 829,
                originalPrice: 1249,
                image: "https://m.media-amazon.com/images/I/811gsOIz-5L._UY1100_.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 336,
                name: "French Cuff Formal Shirt",
                description: "Elegant French cuffs for special events",
                price: 999,
                originalPrice: 1599,
                image: "https://i5.walmartimages.com/seo/Boys-Shirts-Size-10-12-Boys-Long-Sleeve-Solid-Button-Down-Casual-Long-Sleeves-Dress-Shirts-White-8-9-Years_ac4320f7-d9c5-4137-98c7-503e81cbf45c.cace8d7e7519c11cbdd23d2d892525b1.jpeg",
                special: true,
                sizes: ['10-11Y', '12-13Y']
            },
            {
                id: 337,
                name: "Linen Blend Shirt",
                description: "Breathable linen blend for summer events",
                price: 879,
                originalPrice: 1349,
                image: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/Search/Lge/F04129.jpg?im=Resize,width=450",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 338,
                name: "Button-Down Collar Shirt",
                description: "Classic button-down collar for a preppy look",
                price: 769,
                originalPrice: 1149,
                image: "https://cdn05.nnnow.com/web-images/large/styles/Z3MF7KIDYG4/1744785893451/1.jpg",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 339,
                name: "Micro-Check Dress Shirt",
                description: "Subtle micro-check pattern for formal wear",
                price: 919,
                originalPrice: 1449,
                image: "https://www.faryra.com/cdn/shop/files/4M6A1406.jpg?v=1731133045&width=533",
                special: false,
                sizes: ['6-7Y', '8-9Y']
            },
            {
                id: 340,
                name: "Pinpoint Oxford Shirt",
                description: "Fine pinpoint fabric for a luxurious feel",
                price: 949,
                originalPrice: 1499,
                image: "https://target.scene7.com/is/image/Target/GUEST_fa7310f6-8cdc-4294-8796-9db70dc0bfa9?wid=300&hei=300&fmt=pjpeg",
                special: true,
                sizes: ['10-11Y', '12-13Y']
            },
            // Additional shirts with similar structure...
            {
                id: 341,
                name: "Royal Blue Formal Shirt",
                description: "Vibrant royal blue for standout occasions",
                price: 819,
                originalPrice: 1269,
                image: "https://opposuits.com/cdn/shop/files/OppoSuits-boys-shirt-Navy-Royale1.jpg?v=1695030256",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 342,
                name: "Twill Dress Shirt",
                description: "Durable twill weave for long-lasting wear",
                price: 859,
                originalPrice: 1329,
                image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/26178720/2023/12/1/55769267-fd9d-49a0-985b-16875065a28c1701444730806PurpleUnitedKidsBoysBlueOpaqueCasualShirt1.jpg",
                special: true,
                sizes: ['8-9Y', '10-11Y']
            },
            {
                id: 343,
                name: "Herringbone Pattern Shirt",
                description: "Elegant herringbone pattern for special events",
                price: 939,
                originalPrice: 1479,
                image: "https://cdn15.nnnow.com/web-images/large/styles/FKYMPE50AJJ/1659610357877/1.jpg",
                special: false,
                sizes: ['6-7Y', '12-13Y']
            },
            {
                id: 344,
                name: "Spread Collar Dress Shirt",
                description: "Modern spread collar for a contemporary look",
                price: 889,
                originalPrice: 1369,
                image: "https://purecloth.co/cdn/shop/files/DSC03915_1583x.webp?v=1723148872",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 345,
                name: "Bengal Striped Shirt",
                description: "Classic Bengal stripes for a timeless style",
                price: 799,
                originalPrice: 1199,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/30622012/2025/5/26/77936a22-c556-40e9-a0fb-d3518e7e94ed1748259528027-The-Lion-and-The-Fish-Boys-Comfort-Band-Collar-Bengal-Stripe-1.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 346,
                name: "Party Wear Formal Shirt",
                description: "With subtle shimmer for party occasions",
                price: 969,
                originalPrice: 1549,
                image: "https://images.meesho.com/images/products/493338470/ckf3j_512.webp?width=512",
                special: true,
                sizes: ['10-11Y', '12-13Y']
            },
            {
                id: 347,
                name: "Wrinkle-Resistant Shirt",
                description: "Stays fresh looking all day long",
                price: 879,
                originalPrice: 1349,
                image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/33095028/2025/6/15/158e3061-7dc4-46dd-b75d-545b0577632f1749990585028-CHARCHIT-Boys-Textured-Wrinkle-Free-Shirt-8441749990584615-1.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 348,
                name: "Grandad Collar Shirt",
                description: "Trendy grandad collar style for fashion",
                price: 839,
                originalPrice: 1299,
                image: "https://img-lcwaikiki.mncdn.com/mnpadding/1020/1360/ffffff/pim/productimages/20241/6974898/v1/l_20241-s4dd33z1-gtn-108-30_a.jpg",
                special: true,
                sizes: ['8-9Y', '10-11Y']
            },
            {
                id: 349,
                name: "Tuxedo Dress Shirt",
                description: "For formal black-tie events and weddings",
                price: 1029,
                originalPrice: 1649,
                image: "https://www.mumkins.in/cdn/shop/files/boys-suit-bs1169-green-model-image.jpg?v=1755841267&width=1080",
                special: false,
                sizes: ['10-11Y', '12-13Y']
            },
            {
                id: 350,
                name: "Seersucker Formal Shirt",
                description: "Cool seersucker fabric for summer events",
                price: 899,
                originalPrice: 1399,
                image: "https://cdn05.nnnow.com/web-images/large/styles/5HZS3J9HGED/1741163348434/1.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
                    ],
                    
                    btshirts: [
                       {
                id: 351,
                name: "Space Adventure Tee",
                description: "Rocket ship design for little astronauts",
                price: 499,
                originalPrice: 799,
                image: "https://images-cdn.ubuy.co.in/634ee79d389e8321173de4f2-kids-pre-k-let-the-adventure-begin-back.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 352,
                name: "Dinosaur Explorer",
                description: "T-rex graphic for dinosaur lovers",
                price: 529,
                originalPrice: 849,
                image: "https://image.hm.com/assets/hm/d5/dc/d5dc31b9800d3acd15dc77079f6c5bf6a0d8609a.jpg?imwidth=1260",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 353,
                name: "Superhero Squad",
                description: "Classic superhero emblem design",
                price: 479,
                originalPrice: 759,
                image: "https://charmandchic.com/wp-content/uploads/2025/03/marvel-superhero-captain-america-kids-t-shirt-purple.png",
                special: false,
                sizes: ['6-7Y', '8-9Y']
            },
            {
                id: 354,
                name: "Animal Safari",
                description: "Wild animal prints for adventure seekers",
                price: 549,
                originalPrice: 899,
                image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/27741198/2024/2/21/66ec5950-87e9-4e23-9cfa-0e79152ed4081708504650690PrintMyFashionBoysPrintedAppliqueT-shirt1.jpg",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 355,
                name: "Ocean Explorer",
                description: "Colorful underwater scene with fish",
                price: 519,
                originalPrice: 829,
                image: "https://i.etsystatic.com/17200887/r/il/cf96eb/5833749019/il_300x300.5833749019_64qh.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 356,
                name: "Robot Revolution",
                description: "Futuristic robot design for tech lovers",
                price: 559,
                originalPrice: 929,
                image: "https://m.media-amazon.com/images/I/810ejrjNJLL._UY1000_.jpg",
                special: true,
                sizes: ['8-9Y', '10-11Y']
            },
            {
                id: 357,
                name: "Sports All-Star",
                description: "Basketball graphic for active kids",
                price: 489,
                originalPrice: 789,
                image: "https://i.ebayimg.com/images/g/dTMAAOSwgjhiWG2o/s-l1200.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 358,
                name: "Jungle Adventure",
                description: "Tropical jungle with monkeys and parrots",
                price: 539,
                originalPrice: 879,
                image: "https://m.media-amazon.com/images/I/51ZoUYREzgL._UY1100_.jpg",
                special: true,
                sizes: ['8-9Y', '10-11Y']
            },
            {
                id: 359,
                name: "Race Car Champion",
                description: "Speed racer design with checkered flag",
                price: 509,
                originalPrice: 819,
                image: "https://www.juscubs.com/cdn/shop/files/24AW027.jpg?v=1751516138",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 360,
                name: "Math Whiz",
                description: "Fun math symbols and equations design",
                price: 499,
                originalPrice: 799,
                image: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C61%2BuD4gHTqL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png",
                special: false,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 361,
                name: "Galaxy Explorer",
                description: "Nebula and stars design for space fans",
                price: 569,
                originalPrice: 949,
                image: "https://charmandchic.com/wp-content/uploads/2025/03/young-astronauts-galaxy-tee-kids-space-adventure-shirt-purple.png",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 362,
                name: "Pirate Adventure",
                description: "Jolly Roger and treasure map design",
                price: 529,
                originalPrice: 849,
                image: "https://m.media-amazon.com/images/I/91o6gC5DJ4L._CLa%7C2140%2C2000%7CA1fQNXSDx5L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
                special: false,
                sizes: ['8-9Y', '10-11Y']
            },
            {
                id: 363,
                name: "Superhero Academy",
                description: "Comic book style hero team design",
                price: 549,
                originalPrice: 899,
                image: "https://m.media-amazon.com/images/I/B1INbxo3smL._CLa%7C2140%2C2000%7C91N4vM84GlL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 364,
                name: "Wild West Cowboy",
                description: "Horses and cactus western theme",
                price: 499,
                originalPrice: 799,
                image: "https://img-va.myshopline.com/image/store/2000490266/1678067801995/1-8d26ff1c-dbca-4b43-b355-d007e0949c10.jpg?w=1280&h=1280",
                special: false,
                sizes: ['8-9Y', '10-11Y']
            },
            {
                id: 365,
                name: "Deep Sea Diver",
                description: "Octopus and submarine adventure design",
                price: 539,
                originalPrice: 879,
                image: "https://m.media-amazon.com/images/I/812Ki5EDleL._UY1100_.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 366,
                name: "Rock Band Star",
                description: "Guitar and music notes rock theme",
                price: 519,
                originalPrice: 829,
                image: "https://i.etsystatic.com/32411955/r/il/ad38f6/3944591737/il_1588xN.3944591737_ao9m.jpg",
                special: false,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 367,
                name: "Robot Factory",
                description: "Gear and mechanical design for builders",
                price: 559,
                originalPrice: 929,
                image: "https://m.media-amazon.com/images/I/71dgerW5SvL._AC_SY350_QL65_.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y']
            },
            {
                id: 368,
                name: "Basketball Pro",
                description: "Slam dunk action graphic for sports fans",
                price: 489,
                originalPrice: 789,
                image: "https://contents.mediadecathlon.com/p2670777/f7e167c0ced8cb145b530abbd1c1dd96/p2670777.jpg",
                special: false,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 369,
                name: "Alien Invasion",
                description: "Friendly aliens and UFOs design",
                price: 549,
                originalPrice: 899,
                image: "https://5.imimg.com/data5/SELLER/Default/2020/9/WX/XP/OG/911523/kids-t-shirt-500x500.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 370,
                name: "Construction Zone",
                description: "Hard hat and tools design for builders",
                price: 499,
                originalPrice: 799,
                image: "https://5.imimg.com/data5/ECOM/Default/2022/6/SQ/MF/AY/12865090/iam2-diggingitsecondbirthdayt-shirtforkids-500x500.jpg",
                special: false,
                sizes: ['8-9Y', '10-11Y']
            },
            

                    ],
                   
    
        bpants: [
           {
                id: 371,
                name: "Boys Denim Jeans",
                description: "Durable denim jeans for active boys with reinforced knees",
                price: 999,
                originalPrice: 1499,
                image: "https://image.made-in-china.com/2f0j00TmUEOGsKECbB/Fashion-Cute-Kids-Boy-s-Denim-Jeans-with-Printing-and-Embroidery.webp",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 372,
                name: "Boys Cargo Pants",
                description: "Functional cargo pants with multiple pockets for storage",
                price: 899,
                originalPrice: 1299,
                image: "https://images-cdn.ubuy.co.in/657b0f402527684f37169038-patpat-boys-cargo-pants-with-pocket.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 373,
                name: "Boys Track Pants",
                description: "Comfortable track pants with elastic waistband for sports",
                price: 799,
                originalPrice: 1199,
                image: "https://www.ethicalmerchco.com.au/cdn/shop/products/3023_kids_track_pants_front_1024x1024.jpg?v=1543574469",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 374,
                name: "Boys Chino Pants",
                description: "Smart chino pants for school and formal occasions",
                price: 849,
                originalPrice: 1249,
                image: "https://cdn03.nnnow.com/web-images/medium/styles/UGJF90JBR9U/1742890450536/1.jpg",
                special: false,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 375,
                name: "Boys Jogger Pants",
                description: "Stylish jogger pants with tapered legs and cuffs",
                price: 749,
                originalPrice: 1099,
                image: "https://www.jiomart.com/images/product/original/rvtx7j47qb/basis-stripes-boys-black-track-pants-product-images-rvtx7j47qb-2-202309151240.jpg?im=Resize=(500,630)",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 376,
                name: "Boys Corduroy Pants",
                description: "Warm corduroy pants with ribbed texture for winter",
                price: 949,
                originalPrice: 1399,
                image: "https://ruchicaz.com/cdn/shop/products/kids_3.jpg?v=1636456248",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 377,
                name: "Boys Athletic Pants",
                description: "Breathable athletic pants for active play and sports",
                price: 699,
                originalPrice: 1049,
                image: "https://www.juscubs.com/cdn/shop/files/230641_A_0a3d38c5-a935-434d-9a0e-d79dacfe1420.jpg?v=1706540187",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 378,
                name: "Boys Dress Pants",
                description: "Formal dress pants for special occasions and events",
                price: 1099,
                originalPrice: 1599,
                image: "https://i.etsystatic.com/27063046/r/il/521cc8/5869939461/il_570xN.5869939461_emar.jpg",
                special: false,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 379,
                name: "Boys Fleece Pants",
                description: "Cozy fleece pants for cold weather comfort",
                price: 899,
                originalPrice: 1349,
                image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/2025/APRIL/30/etLSoS2C_618ba78599514425bdbe4bf956fb8c5d.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 380,
                name: "Boys Convertible Pants",
                description: "Versatile convertible pants that turn into shorts",
                price: 999,
                originalPrice: 1499,
                image: "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020423055_437Wx649H_202312121934551.jpeg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 381,
                name: "Boys Canvas Pants",
                description: "Durable canvas pants for rough outdoor play",
                price: 849,
                originalPrice: 1249,
                image: "https://www.hannaandersson.com/dw/image/v2/BBLM_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6039f374/images/main/81351/81351_PM7_110_10.jpg?sw=768&q=90",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 382,
                name: "Boys Striped Pants",
                description: "Fun striped pants with colorful patterns",
                price: 799,
                originalPrice: 1199,
                image: "https://assets.ajio.com/medias/sys_master/root/20240415/nVvy/661d2f5016fd2c6e6ab16fad/-473Wx593H-467253191-black-MODEL5.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 383,
                name: "Boys Waterproof Pants",
                description: "Water-resistant pants for rainy days and outdoor adventures",
                price: 1199,
                originalPrice: 1799,
                image: "https://m.media-amazon.com/images/I/713U7Ec2foL._UY1100_.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 384,
                name: "Boys Camo Pants",
                description: "Cool camouflage pattern pants for adventurous boys",
                price: 949,
                originalPrice: 1399,
                image: "https://m.media-amazon.com/images/I/71PY3Ce9-VL._UY1100_.jpg",
                special: false,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 385,
                name: "Boys Linen Pants",
                description: "Lightweight linen pants for summer comfort",
                price: 899,
                originalPrice: 1349,
                image: "https://media.maxfashion.com/i/max/B23KBOFSMTR112BROWNLIGHT-B23KBOFSMTR112-MXSPR23140123_02-2100.jpg?$prodimg-d-prt-pdp-2x$&$quality-retina$&fmt=auto&sm=c",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 386,
                name: "Boys Drawstring Pants",
                description: "Comfortable drawstring waist pants for easy wear",
                price: 749,
                originalPrice: 1099,
                image: "https://m.media-amazon.com/images/I/61NeZ3KyKKL._AC_UY1000_.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 387,
                name: "Boys Thermal Pants",
                description: "Warm thermal pants for winter layering",
                price: 899,
                originalPrice: 1349,
                image: "https://5.imimg.com/data5/SELLER/Default/2023/1/IS/XS/CF/9405676/kids-thermal-wear.webp",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 388,
                name: "Boys Printed Pants",
                description: "Fun printed pants with cartoon characters and designs",
                price: 799,
                originalPrice: 1199,
                image: "https://m.media-amazon.com/images/I/81hsmbkUsTL._UY1100_.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 389,
                name: "Boys Stretch Denim",
                description: "Comfortable stretch denim jeans with flexibility",
                price: 1049,
                originalPrice: 1549,
                image: "https://m.media-amazon.com/images/I/81S6-Lu2TiL._UY1100_.jpg",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 390,
                name: "Boys Uniform Pants",
                description: "School uniform pants with proper fit and durability",
                price: 949,
                originalPrice: 1399,
                image: "https://sc04.alicdn.com/kf/U8eae1fa54f524be2a1db2b4f8b2d8d34c.png",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            }
            
        ],
      
        bshorts: [
           {
                id: 391,
                name: "Boys Cargo Shorts",
                description: "Comfortable cargo shorts with multiple pockets for boys",
                price: 699,
                originalPrice: 999,
                image: "https://4.imimg.com/data4/VS/GB/MY-11310152/boys-cargo-shorts.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 392,
                name: "Boys Denim Shorts",
                description: "Durable denim shorts for casual summer wear",
                price: 749,
                originalPrice: 1099,
                image: "https://cdn09.nnnow.com/web-images/large/styles/1HR2NCUGT4X/1752133374276/1.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 393,
                name: "Boys Athletic Shorts",
                description: "Breathable athletic shorts for sports and active play",
                price: 599,
                originalPrice: 899,
                image: "https://image.made-in-china.com/202f0j00VdqlyJCmeKgD/Factory-Wholesale-Casual-Youth-Boys-Loose-Fit-Athletic-Shorts-for-Kids-Boys-Quick-Dry-Trunk-Short-Pants-with-Pocket-Skateboarding-Active-Basketball-Shorts.webp",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 394,
                name: "Boys Swim Shorts",
                description: "Quick-dry swim shorts with built-in liner",
                price: 649,
                originalPrice: 949,
                image: "https://www.thebeachcompany.in/cdn/shop/products/SD_04_T87_7268W_P4_X_EC_0_800x.jpg?v=1675938294",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 395,
                name: "Boys Basketball Shorts",
                description: "Long basketball shorts with side slits for movement",
                price: 699,
                originalPrice: 999,
                image: "https://img.tatacliq.com/images/i22//437Wx649H/MP000000025285524_437Wx649H_202502061654031.jpeg",
                special: false,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 396,
                name: "Boys Chino Shorts",
                description: "Smart chino shorts for casual outings",
                price: 799,
                originalPrice: 1199,
                image: "https://m.media-amazon.com/images/I/51VkydzY6GL._UY1100_.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 397,
                name: "Boys Camo Shorts",
                description: "Cool camouflage pattern shorts for adventure",
                price: 649,
                originalPrice: 949,
                image: "https://imagescdn.vanheusenindia.com/img/app/product/8/811260-9664394.jpg?auto=format&w=390",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 398,
                name: "Boys Jersey Shorts",
                description: "Soft jersey shorts for comfortable everyday wear",
                price: 549,
                originalPrice: 799,
                image: "https://5.imimg.com/data5/SELLER/Default/2025/4/507118874/DY/LG/ND/196007653/kids-sport-pant-500x500.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 399,
                name: "Boys Board Shorts",
                description: "Surf-style board shorts for beach and pool",
                price: 699,
                originalPrice: 999,
                image: "https://m.media-amazon.com/images/I/51l2dt4rF4L._UY1100_.jpg",
                special: false,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 400,
                name: "Boys Drawstring Shorts",
                description: "Easy wear drawstring shorts with adjustable waist",
                price: 599,
                originalPrice: 899,
                image: "https://m.media-amazon.com/images/I/919AToUyLBL._UY1100_.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 401,
                name: "Boys Cargo Jean Shorts",
                description: "Denim shorts with cargo pockets for extra storage",
                price: 799,
                originalPrice: 1199,
                image: "https://assets.ajio.com/medias/sys_master/root/20240610/ntHY/6667104816fd2c6e6a71b751/-473Wx593H-443047905-blue-MODEL.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 402,
                name: "Boys Running Shorts",
                description: "Lightweight running shorts with built-in liner",
                price: 649,
                originalPrice: 949,
                image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c7dadbc8-571a-46fc-b5f7-8a4b5bd269b3/B+NK+DFADV+MULTI+TECH+SHORT.png",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 403,
                name: "Boys Plaid Shorts",
                description: "Classic plaid pattern shorts for preppy style",
                price: 749,
                originalPrice: 1099,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/29803612/2024/5/27/62fe9163-c7e1-44bc-9bd4-5c1ff88f9ed61716814503086AngelRocketBoysCheckedPrintedSlimFitDenimShorts1.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 404,
                name: "Boys Mesh Shorts",
                description: "Breathable mesh shorts for hot summer days",
                price: 599,
                originalPrice: 899,
                image: "https://i5.walmartimages.com/seo/Athletic-Works-Boys-Mesh-Shorts-3-Pack-Sizes-4-18-Husky_d3f5a430-f49a-4ed5-80d3-9e74ce2f6239.9c65f49c359e5ea7b7f2b6516ea58610.jpeg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 405,
                name: "Boys Cargo Jogger Shorts",
                description: "Hybrid cargo jogger shorts with tapered fit",
                price: 849,
                originalPrice: 1249,
                image: "https://m.media-amazon.com/images/I/71zCjJtDpwL._UY1000_.jpg",
                special: false,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 406,
                name: "Boys Striped Shorts",
                description: "Colorful striped shorts for summer fashion",
                price: 699,
                originalPrice: 999,
                image: "https://i.pinimg.com/736x/e2/97/68/e29768ee07a83615d73690ec4d740447.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 407,
                name: "Boys Terry Cloth Shorts",
                description: "Soft terry cloth shorts for lounging and comfort",
                price: 649,
                originalPrice: 949,
                image: "https://i.ebayimg.com/images/g/f1EAAOSw395nDXlw/s-l400.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 408,
                name: "Boys Adventure Shorts",
                description: "Durable adventure shorts with reinforced stitching",
                price: 799,
                originalPrice: 1199,
                image: "https://m.media-amazon.com/images/I/812aHv0ocFL._UY1100_.jpg",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 409,
                name: "Boys Printed Shorts",
                description: "Fun printed shorts with superhero and cartoon designs",
                price: 599,
                originalPrice: 899,
                image: "https://assets.ajio.com/medias/sys_master/root/20240617/EeIB/666fc8151d763220fac27fbc/-473Wx593H-700078230-pink-MODEL.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 410,
                name: "Boys Linen Shorts",
                description: "Lightweight linen shorts for summer comfort",
                price: 849,
                originalPrice: 1249,
                image: "https://comfykiddos.com/wp-content/uploads/2023/06/Artboard-2-10.jpg",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            }
            

                    ],
                },
                girls: {
                    gtops: [
                         {
                id: 411,
                name: "Girls Floral Top",
                description: "Beautiful floral top for girls with ruffled sleeves",
                price: 599,
                originalPrice: 899,
                image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/1/71ea28d118014201_1.jpg?rnd=20200526195200&tr=w-512",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 412,
                name: "Girls Striped T-shirt",
                description: "Colorful striped cotton t-shirt for everyday wear",
                price: 449,
                originalPrice: 699,
                image: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021633386_437Wx649H_202403211708321.jpeg",
                special: false,
                sizes: ['4-5Y', '6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 413,
                name: "Girls Denim Top",
                description: "Classic denim top with button front and pockets",
                price: 799,
                originalPrice: 999,
                image: "https://www.mumkins.in/cdn/shop/files/girls-top-gu133093c-darkblue-model-image.jpg?v=1756720905",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 414,
                name: "Girls Polka Dot Blouse",
                description: "Adorable polka dot blouse with puffed sleeves",
                price: 549,
                originalPrice: 749,
                image: "https://5.imimg.com/data5/SELLER/Default/2021/2/OJ/VU/EL/66332624/whatsapp-image-2021-02-16-at-4-45-32-pm-500x500.jpg",
                special: false,
                sizes: ['4-5Y', '6-7Y', '8-9Y']
            },
            {
                id: 415,
                name: "Girls Knit Sweater",
                description: "Warm and cozy knit sweater for cool days",
                price: 899,
                originalPrice: 1199,
                image: "https://i.etsystatic.com/8942848/r/il/d21139/5251272117/il_570xN.5251272117_ipof.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 416,
                name: "Girls Rainbow Top",
                description: "Bright rainbow colored top with elastic neckline",
                price: 399,
                originalPrice: 599,
                image: "https://images.meesho.com/images/products/415306946/rpg6h_512.webp?width=512",
                special: false,
                sizes: ['2-3Y', '4-5Y', '6-7Y']
            },
            {
                id: 417,
                name: "Girls Sports Tank",
                description: "Breathable sports tank top for active girls",
                price: 349,
                originalPrice: 499,
                image: "https://image.made-in-china.com/155f0j00spNkVHyPnfzo/Wholesale-Hot-Selling-Slim-Fit-Sports-Crop-Tank-Tops-with-Removable-Pads-for-Kids-Girls-Custom-Logo-Children-Gym-Activewear-Fitness-Bra.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 418,
                name: "Girls Velvet Top",
                description: "Luxurious velvet top for special occasions",
                price: 699,
                originalPrice: 899,
                image: "https://peppermint.in/cdn/shop/files/AW24-17321-Pink-G-M-1F1_1024x1024.jpg?v=1727857474",
                special: true,
                sizes: ['4-5Y', '6-7Y', '8-9Y']
            },
            {
                id: 419,
                name: "Girls Animal Print Top",
                description: "Fun animal print top with cute paw details",
                price: 499,
                originalPrice: 699,
                image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/2/f2df35e153908501G_3.jpg?rnd=20200526195200&tr=w-512",
                special: false,
                sizes: ['4-5Y', '6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 420,
                name: "Girls Lace Blouse",
                description: "Elegant lace blouse for formal events",
                price: 649,
                originalPrice: 849,
                image: "https://peppermint.in/cdn/shop/files/AW24-18381-Black-G-M-1F1_1024x1024.jpg?v=1727777137",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 421,
                name: "Girls Hooded Sweatshirt",
                description: "Comfortable hooded sweatshirt with front pocket",
                price: 749,
                originalPrice: 949,
                image: "https://5.imimg.com/data5/SELLER/Default/2022/11/GR/XY/NI/7175905/kids-sweatshirts-500x500.jpg",
                special: false,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 422,
                name: "Girls Tie-Dye Top",
                description: "Colorful tie-dye pattern cotton top",
                price: 449,
                originalPrice: 649,
                image: "https://i.cubmcpaws.com/fit-in/dropbox_6306220917010910.jpg",
                special: true,
                sizes: ['4-5Y', '6-7Y', '8-9Y']
            },
            {
                id: 423,
                name: "Girls Button-Down Shirt",
                description: "Classic button-down shirt for school wear",
                price: 599,
                originalPrice: 799,
                image: "https://m.media-amazon.com/images/I/612tgQJMpbL._UY1100_.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 424,
                name: "Girls Sparkle Top",
                description: "Shimmery sparkle top for parties and celebrations",
                price: 699,
                originalPrice: 899,
                image: "https://peppermint.in/cdn/shop/files/AW22-15344-NavyBlue-G-M-1F1_1024x1024.jpg?v=1706361510",
                special: true,
                sizes: ['4-5Y', '6-7Y', '8-9Y']
            },
            {
                id: 425,
                name: "Girls Long Sleeve Tee",
                description: "Basic long sleeve cotton t-shirt",
                price: 399,
                originalPrice: 549,
                image: "https://www.campanakids.com/cdn/shop/files/CK51809_A_1080x.jpg?v=1697525846",
                special: false,
                sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y']
            },
            {
                id: 426,
                name: "Girls Embroidered Top",
                description: "Beautifully embroidered floral design top",
                price: 649,
                originalPrice: 849,
                image: "https://assets.ajio.com/medias/sys_master/root/20240303/v2ru/65e47b6605ac7d77bb9248ab/-473Wx593H-467129758-blue-MODEL.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 427,
                name: "Girls Graphic Tee",
                description: "Fun graphic t-shirt with cartoon characters",
                price: 449,
                originalPrice: 649,
                image: "https://www.jiomart.com/images/product/original/rvzdcsstj4/little-zing-super-soft-cotton-tee-for-kids-charming-prints-kids-girls-cotton-t-shirts-kids-t-shirts-with-modern-graphics-product-images-rvzdcsstj4-1-202409271927.jpg?im=Resize=(500,630)",
                special: false,
                sizes: ['4-5Y', '6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 428,
                name: "Girls Peplum Top",
                description: "Stylish peplum top with ruffled bottom",
                price: 599,
                originalPrice: 799,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7FAkeR0MsKo12va0ECFn4_IrPe0jLKNCJvg&s",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 429,
                name: "Girls Thermal Top",
                description: "Warm thermal top for winter months",
                price: 549,
                originalPrice: 749,
                image: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018554290_437Wx649H_202308030123101.jpeg",
                special: false,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 430,
                name: "Girls Off-Shoulder Top",
                description: "Trendy off-shoulder top with elastic band",
                price: 499,
                originalPrice: 699,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/27607718/2024/2/15/740ecdb9-635a-48f5-81ed-a53ea2f5a72f1707980658250CutiekinsPrintOff-ShoulderBlousonCropTop1.jpg",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            }
                        ],
                    gethnic: [
                       {
                id: 431,
                name: "Girls Ethnic Dress",
                description: "Traditional ethnic dress for girls with intricate embroidery",
                price: 1299,
                originalPrice: 1899,
                image: "https://cdn.shopify.com/s/files/1/0583/4820/8201/files/Ethnic_wear_for_kid_girls_480x480.webp?v=1734345978",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 432,
                name: "Girls Lehenga Choli",
                description: "Beautiful lehenga choli set with mirror work",
                price: 1899,
                originalPrice: 2499,
                image: "https://m.media-amazon.com/images/I/91fV7pzppsL._UY1100_.jpg",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 433,
                name: "Girls Anarkali Suit",
                description: "Elegant Anarkali suit with floral prints",
                price: 1499,
                originalPrice: 1999,
                image: "https://www.fayonkids.com/cdn/shop/files/manufactured-by-fayon-kids-noida-u-p-neon-pink-mirror-embroidered-lehenga-choli-40923288469760.jpg?v=1756713891&width=713",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 434,
                name: "Girls Silk Saree",
                description: "Mini silk saree with blouse for special occasions",
                price: 1599,
                originalPrice: 2199,
                image: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021543138_437Wx649H_202403141758551.jpeg",
                special: true,
                sizes: ['10-11Y', '12-13Y']
            },
            {
                id: 435,
                name: "Girls Patiala Suit",
                description: "Comfortable Patiala suit with vibrant colors",
                price: 1199,
                originalPrice: 1699,
                image: "https://m.media-amazon.com/images/I/81yPsc39xeL._UY1100_.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 436,
                name: "Girls Ghagra Set",
                description: "Traditional ghagra set with zari border",
                price: 1699,
                originalPrice: 2299,
                image: "https://img.perniaspopupshop.com/catalog/product/f/y/FYKC062243_1.JPG?impolicy=detailimageprod",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 437,
                name: "Girls Kurta Pyjama",
                description: "Cotton kurta pyjama set for daily wear",
                price: 999,
                originalPrice: 1399,
                image: "https://img.perniaspopupshop.com/catalog/product/t/i/TITA082422_1.jpg?impolicy=listingimagenew",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 438,
                name: "Girls Designer Salwar",
                description: "Designer salwar suit with stone work",
                price: 1799,
                originalPrice: 2399,
                image: "https://5.imimg.com/data5/SELLER/Default/2022/8/XS/KH/CV/153058291/new-product-500x500.jpeg",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 439,
                name: "Girls Silk Kurta",
                description: "Pure silk kurta with golden embroidery",
                price: 1399,
                originalPrice: 1899,
                image: "https://www.kheliyatoys.com/wp-content/uploads/2022/05/GLK012-Orange2.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 440,
                name: "Girls Wedding Lehenga",
                description: "Heavy wedding lehenga with intricate work",
                price: 2999,
                originalPrice: 3999,
                image: "https://m.media-amazon.com/images/I/714rveJNcOL._UY1100_.jpg",
                special: true,
                sizes: ['10-11Y', '12-13Y']
            },
            {
                id: 441,
                name: "Girls Cotton Frock",
                description: "Traditional cotton frock with ethnic prints",
                price: 899,
                originalPrice: 1299,
                image: "https://www.jiomart.com/images/product/original/rvwrdeoabd/fashion-dream-girls-blue-striped-cotton-pack-of-1-frock-product-images-rvwrdeoabd-0-202302120339.jpg?im=Resize=(500,630)",
                special: false,
                sizes: ['4-5Y', '6-7Y', '8-9Y']
            },
            {
                id: 442,
                name: "Girls Chaniya Choli",
                description: "Gujarati style chaniya choli for Navratri",
                price: 1599,
                originalPrice: 2099,
                image: "https://img.faballey.com/images/Product/XGL00133Z/d3.jpg",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 443,
                name: "Girls Silk Anarkali",
                description: "Luxurious silk Anarkali with pearl work",
                price: 1999,
                originalPrice: 2599,
                image: "https://img.perniaspopupshop.com/catalog/product/t/r/TRKC032256_1.jpg?impolicy=detailimageprod",
                special: false,
                sizes: ['10-11Y', '12-13Y']
            },
            {
                id: 444,
                name: "Girls Embroidered Kurta",
                description: "Hand embroidered kurta with thread work",
                price: 1299,
                originalPrice: 1799,
                image: "https://images.meesho.com/images/products/408960956/fvaac_512.webp?width=512",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 445,
                name: "Girls Party Wear Saree",
                description: "Party wear saree with sequin work",
                price: 1399,
                originalPrice: 1899,
                image: "https://desigiftsusa.com/cdn/shop/files/74cbb9f8-331a-45ec-b0a3-ad148c2eb348_682x.jpg?v=1722648770",
                special: false,
                sizes: ['10-11Y', '12-13Y']
            },
            {
                id: 446,
                name: "Girls Cotton Salwar",
                description: "Comfortable cotton salwar suit for summer",
                price: 1099,
                originalPrice: 1499,
                image: "https://5.imimg.com/data5/SELLER/Default/2022/8/XS/KH/CV/153058291/new-product-500x500.jpeg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 447,
                name: "Girls Velvet Lehenga",
                description: "Royal velvet lehenga for festive occasions",
                price: 2199,
                originalPrice: 2899,
                image: "https://www.fayonkids.com/cdn/shop/products/fayon-kids-wine-embroidery-velvet-lehenga-choli-and-dupatta-for-girls-37157491409152_800x.jpg?v=1756716007",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 448,
                name: "Girls Printed Kurta",
                description: "Colorful printed kurta with palazzo",
                price: 999,
                originalPrice: 1399,
                image: "https://www.fayonkids.com/cdn/shop/products/fayon-kids-wine-embroidery-velvet-lehenga-choli-and-dupatta-for-girls-37157491409152_800x.jpg?v=1756716007",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 449,
                name: "Girls Designer Anarkali",
                description: "Designer Anarkali with heavy embroidery",
                price: 2399,
                originalPrice: 3199,
                image: "https://images.cbazaar.com/images/blended-cotton-embroidered-kids-girls-anarkali-suit-kdgnurc2029-u.jpg",
                special: true,
                sizes: ['10-11Y', '12-13Y']
            },
            {
                id: 450,
                name: "Girls Silk Saree Blouse",
                description: "Matching blouse for silk saree sets",
                price: 699,
                originalPrice: 999,
                image: "https://images.meesho.com/images/products/459624312/oqxod_512.webp?width=512",
                special: false,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            }

                    ],
                    gskirts: [
                        {
                id: 451,
                name: "Girls Denim Skirt",
                description: "Stylish denim skirt for girls with front pockets",
                price: 799,
                originalPrice: 1199,
                image: "https://m.media-amazon.com/images/I/710Y3AvqFuL._UY350_.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 452,
                name: "Girls Cotton Shorts",
                description: "Comfortable cotton shorts for summer play",
                price: 499,
                originalPrice: 699,
                image: "https://houseofekam.com/cdn/shop/files/Light-Pink-Cotton-Slub-Girls-Shorts-Kidswear-House-of-Ekam_500x.jpg?v=1738705742",
                special: false,
                sizes: ['4-5Y', '6-7Y', '8-9Y']
            },
            {
                id: 453,
                name: "Girls Tiered Skirt",
                description: "Colorful tiered skirt with elastic waistband",
                price: 649,
                originalPrice: 899,
                image: "https://img.perniaspopupshop.com/catalog/product/m/k/MKFKD022452_1.jpg?impolicy=detailimageprod",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 454,
                name: "Girls Athletic Shorts",
                description: "Breathable athletic shorts for sports activities",
                price: 449,
                originalPrice: 649,
                image: "https://m.media-amazon.com/images/I/71RfotNxf4L._UY350_.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 455,
                name: "Girls Pleated Skirt",
                description: "School-style pleated skirt with front zipper",
                price: 699,
                originalPrice: 999,
                image: "https://m.media-amazon.com/images/I/61qqCJKhJbL._UY1100_.jpg",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 456,
                name: "Girls Denim Shorts",
                description: "Classic denim shorts with distressed details",
                price: 599,
                originalPrice: 849,
                image: "https://image.made-in-china.com/202f0j00PKpWifGlHjrn/Wholesale-Plain-Summer-Casual-Kids-Denim-Shorts-Fashion-Baby-Girls-Hot-Shorts-Pants.webp",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 457,
                name: "Girls Tutu Skirt",
                description: "Fluffy tutu skirt for dress-up and parties",
                price: 549,
                originalPrice: 799,
                image: "https://m.media-amazon.com/images/I/71WG0bJAhUL._UY1100_.jpg",
                special: true,
                sizes: ['4-5Y', '6-7Y', '8-9Y']
            },
            {
                id: 458,
                name: "Girls Bike Shorts",
                description: "Stretchy bike shorts for active wear",
                price: 399,
                originalPrice: 599,
                image: "https://m.media-amazon.com/images/I/81stH3ciy7L._UY350_.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 459,
                name: "Girls Maxi Skirt",
                description: "Flowy maxi skirt with bohemian print",
                price: 749,
                originalPrice: 1099,
                image: "https://m.media-amazon.com/images/I/71dq-BL5ZHL._UY1100_.jpg",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 460,
                name: "Girls Cargo Shorts",
                description: "Utility cargo shorts with multiple pockets",
                price: 549,
                originalPrice: 799,
                image: "https://www.jiomart.com/images/product/original/rvpgaitb6e/little-funky-cotton-blended-casual-regular-fit-solid-color-cargo-pants-for-trendy-kids-girls-product-images-rvpgaitb6e-0-202409231343.jpg?im=Resize=(500,630)",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 461,
                name: "Girls A-line Skirt",
                description: "Classic A-line skirt with side pockets",
                price: 649,
                originalPrice: 899,
                image: "https://5.imimg.com/data5/SELLER/Default/2023/1/VI/ZN/HU/20781620/cutiekins-girls-skirt-500x500.JPG",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 462,
                name: "Girls Jersey Shorts",
                description: "Soft jersey shorts for lounging and sleep",
                price: 349,
                originalPrice: 499,
                image: "https://www.jiomart.com/images/product/original/rvyeniky2t/makoto-multicolour-kids-girls-shorts-pack-of-3-product-images-rvyeniky2t-0-202308111053.jpg?im=Resize=(500,630)",
                special: false,
                sizes: ['4-5Y', '6-7Y', '8-9Y']
            },
            {
                id: 463,
                name: "Girls Wrap Skirt",
                description: "Adjustable wrap skirt with tie closure",
                price: 599,
                originalPrice: 849,
                image: "https://assets.ajio.com/medias/sys_master/root/20240725/UDHK/66a180031d763220fa234734/-473Wx593H-700225628-black-MODEL.jpg",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 464,
                name: "Girls Sports Shorts",
                description: "Quick-dry sports shorts with inner liner",
                price: 499,
                originalPrice: 699,
                image: "https://m.media-amazon.com/images/I/719lORaBeBL._UY350_.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 465,
                name: "Girls Skater Skirt",
                description: "Flared skater skirt with stretchy waist",
                price: 549,
                originalPrice: 799,
                image: "https://m.media-amazon.com/images/I/71pQqDPqlcL._UY350_.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 466,
                name: "Girls Linen Shorts",
                description: "Breathable linen shorts for hot weather",
                price: 599,
                originalPrice: 849,
                image: "https://i.etsystatic.com/18112712/r/il/e8f74c/1949596306/il_570xN.1949596306_b6u9.jpg",
                special: false,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 467,
                name: "Girls Ruffled Skirt",
                description: "Pretty ruffled skirt with floral pattern",
                price: 699,
                originalPrice: 999,
                image: "https://img.perniaspopupshop.com/catalog/product/m/k/MKFKD022452_1.jpg?impolicy=detailimageprod",
                special: true,
                sizes: ['4-5Y', '6-7Y', '8-9Y']
            },
            {
                id: 468,
                name: "Girls Corduroy Shorts",
                description: "Warm corduroy shorts for fall season",
                price: 649,
                originalPrice: 899,
                image: "https://images.meesho.com/images/products/524483582/l4ztu_512.webp?width=512",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 469,
                name: "Girls Tennis Skirt",
                description: "Sporty tennis skirt with built-in shorts",
                price: 799,
                originalPrice: 1199,
                image: "https://i5.walmartimages.com/asr/90e50791-6d15-4cd1-9420-79fdb0df41fd.86b68dd0dae2788b69cda5d8e71c140a.jpeg",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 470,
                name: "Girls Beach Shorts",
                description: "Colorful beach shorts with tropical print",
                price: 1049,
                originalPrice: 1649,
                image: "https://m.media-amazon.com/images/I/41aXKk0xUJL._SY1000_.jpg",
                special: false,
                sizes: ['4-5Y', '6-7Y', '8-9Y']
            }
                    ],
                    
                    gsets: [
                        {
                id: 471,
                name: "Girls Clothing Set",
                description: "Matching clothing set for girls with top and bottom",
                price: 1499,
                originalPrice: 1999,
                image: "https://5.imimg.com/data5/MP/OO/SY/ANDROID-5045267/product-jpeg-500x500.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 472,
                name: "Girls Summer Outfit Set",
                description: "Bright summer set with top and shorts",
                price: 1299,
                originalPrice: 1799,
                image: "https://images.meesho.com/images/products/381340005/hqcei_512.webp?width=512",
                special: false,
                sizes: ['4-5Y', '6-7Y', '8-9Y']
            },
            {
                id: 473,
                name: "Girls Party Dress Set",
                description: "Elegant party dress with matching hair accessory",
                price: 1899,
                originalPrice: 2499,
                image: "https://image.made-in-china.com/2f0j00QiwhLUpGgORm/Lovely-Kids-Party-Wear-Elegant-Baby-Clothing-Clothes-Dots-Smocked-Wedding-Little-Girl-Dress.webp",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 474,
                name: "Girls Winter Set",
                description: "Warm winter set with sweater and leggings",
                price: 1699,
                originalPrice: 2199,
                image: "https://images.meesho.com/images/products/344072333/olh24_512.webp?width=512",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 475,
                name: "Girls Sports Set",
                description: "Athletic set with t-shirt and track pants",
                price: 1199,
                originalPrice: 1599,
                image: "https://img.joomcdn.net/fbb59891e1b421526cf65a8babdf1146cd648ad2_1024_1024.jpeg",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 476,
                name: "Girls Ethnic Set",
                description: "Traditional ethnic set with kurta and churidar",
                price: 1999,
                originalPrice: 2699,
                image: "https://www.fayonkids.com/cdn/shop/files/manufactured-by-fayon-kids-noida-u-p-baby-pink-embroidered-top-with-plazzo-pant-40923371045120.jpg?v=1756713861&width=533",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 477,
                name: "Girls Beachwear Set",
                description: "Beach set with cover-up and swim bottoms",
                price: 999,
                originalPrice: 1399,
                image: "https://img.fruugo.com/product/0/87/1763682870_0340_0340.jpg",
                special: true,
                sizes: ['4-5Y', '6-7Y', '8-9Y']
            },
            {
                id: 478,
                name: "Girls Formal Set",
                description: "Formal set with blouse and skirt for special occasions",
                price: 1599,
                originalPrice: 2099,
                image: "https://m.media-amazon.com/images/I/81k-+b23qAL._UY1100_.jpg",
                special: false,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 479,
                name: "Girls Casual Set",
                description: "Everyday casual set with top and jeans",
                price: 1399,
                originalPrice: 1899,
                image: "https://www.devilsnangels.in/cdn/shop/files/girls-dress-in-jaipur.webp?v=1734336839",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 480,
                name: "Girls Princess Set",
                description: "Royal princess set with dress and tiara",
                price: 1799,
                originalPrice: 2399,
                image: "https://www.fayonkids.com/cdn/shop/products/fayon-kids-blue-star-net-gown-for-girls-36917058535680.jpg?v=1756716130&width=533",
                special: false,
                sizes: ['4-5Y', '6-7Y', '8-9Y']
            },
            {
                id: 481,
                name: "Girls Rainy Day Set",
                description: "Waterproof set with raincoat and boots",
                price: 1699,
                originalPrice: 2299,
                image: "https://lilplanet.in/wp-content/uploads/2023/07/kids-raincoat.jpg",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 482,
                name: "Girls Dance Set",
                description: "Dance costume set with tutu and leotard",
                price: 1499,
                originalPrice: 1999,
                image: "https://m.media-amazon.com/images/I/612caQKp4OL._UF1000,1000_QL80_.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 483,
                name: "Girls Holiday Set",
                description: "Festive holiday set with themed outfit",
                price: 1899,
                originalPrice: 2499,
                image: "https://m.media-amazon.com/images/I/71Li5DDPLFL._UY1100_.jpg",
                special: true,
                sizes: ['4-5Y', '6-7Y', '8-9Y']
            },
            {
                id: 484,
                name: "Girls School Set",
                description: "School uniform set with shirt and pleated skirt",
                price: 1299,
                originalPrice: 1799,
                image: "https://m.media-amazon.com/images/I/61kd1yUdbEL._UY350_.jpg",
                special: false,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 485,
                name: "Girls Birthday Set",
                description: "Birthday party set with dress and accessories",
                price: 2099,
                originalPrice: 2799,
                image: "https://www.libas.in/cdn/shop/files/1_2e889a85-1c22-462f-a58e-a70119cb28e2.jpg?v=1756101668&width=1080",
                special: true,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 486,
                name: "Girls Outdoor Set",
                description: "Outdoor adventure set with jacket and pants",
                price: 1599,
                originalPrice: 2199,
                image: "https://images.meesho.com/images/products/376412523/gnzg6_512.webp?width=512",
                special: false,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 487,
                name: "Girls Sleep Set",
                description: "Comfortable sleep set with pajamas",
                price: 899,
                originalPrice: 1299,
                image: "https://m.media-amazon.com/images/I/81gj9A2MVNL._UY1100_.jpg",
                special: true,
                sizes: ['4-5Y', '6-7Y', '8-9Y']
            },
            {
                id: 488,
                name: "Girls Photo Shoot Set",
                description: "Photogenic set with coordinated pieces",
                price: 1799,
                originalPrice: 2399,
                image: "https://m.media-amazon.com/images/I/71I26GyxJzL._UY1100_.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            },
            {
                id: 489,
                name: "Girls Travel Set",
                description: "Travel-friendly set with mix-and-match pieces",
                price: 1699,
                originalPrice: 2299,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/27210176/2024/7/9/6252fa49-f44b-4163-816a-dff18519f4bb1720502974666-Nasher-Miles-Kids-Tic-Tac-Toe-360-Degree-Rotation-Hard-Sided-1.jpg",
                special: true,
                sizes: ['8-9Y', '10-11Y', '12-13Y']
            },
            {
                id: 490,
                name: "Girls Designer Set",
                description: "Premium designer set with exclusive prints",
                price: 2499,
                originalPrice: 3299,
                image: "https://img.faballey.com/images/Product/IGT00016Z/d3.jpg",
                special: false,
                sizes: ['6-7Y', '8-9Y', '10-11Y']
            }
                    ]
                }
            },
            accessories: {
                menAccessories: {
                    watches: [
                       {
                id: 491,
                name: "Men's Luxury Watch",
                description: "Elegant luxury watch with genuine leather strap and sapphire crystal",
                price: 3499,
                originalPrice: 4999,
                image: "https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/l/25/0e351d63-10bf-4556-8722-e61a309cc592.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 492,
                name: "Men's Sports Watch",
                description: "Durable sports watch with chronograph and water resistance",
                price: 1999,
                originalPrice: 2999,
                image: "https://m.media-amazon.com/images/I/51UM9geGFCL._SY350_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 493,
                name: "Men's Classic Dress Watch",
                description: "Timeless dress watch with minimalist design and Roman numerals",
                price: 2799,
                originalPrice: 3999,
                image: "https://static.helioswatchstore.com/media/catalog/product/b/4/b41083152_1.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 494,
                name: "Men's Digital Watch",
                description: "Modern digital watch with multiple functions and backlight",
                price: 899,
                originalPrice: 1499,
                image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/6/c6bed653022-Black_1.jpg?rnd=20200526195200&tr=w-512",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 495,
                name: "Men's Diver Watch",
                description: "Professional diver watch with 200m water resistance and rotating bezel",
                price: 3199,
                originalPrice: 4599,
                image: "https://m.media-amazon.com/images/I/61fsdUYmahL._UY1000_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 496,
                name: "Men's Smart Watch",
                description: "Advanced smart watch with fitness tracking and notifications",
                price: 4299,
                originalPrice: 5999,
                image: "https://5.imimg.com/data5/SELLER/Default/2023/7/324394920/ID/GH/HO/191602506/black-men-noise-bluetooth-smartwatch.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 497,
                name: "Men's Aviator Watch",
                description: "Pilot-inspired aviator watch with large dial and luminous hands",
                price: 2399,
                originalPrice: 3499,
                image: "https://m.media-amazon.com/images/I/71ge1-VjTML._UY1000_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 498,
                name: "Men's Chronograph Watch",
                description: "Precision chronograph with multiple sub-dials and tachymeter",
                price: 2699,
                originalPrice: 3899,
                image: "https://sylvi.in/cdn/shop/files/SylviTimegrapherBlueDialRosegoldLeatherMainimage800x1000_1080x.webp?v=1734668718",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 499,
                name: "Men's Stainless Steel Watch",
                description: "Sleek stainless steel watch with bracelet strap and date function",
                price: 1899,
                originalPrice: 2799,
                image: "https://m.media-amazon.com/images/I/41Xl1HbOzIL._UY1000_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 500,
                name: "Men's Field Watch",
                description: "Rugged field watch with nylon strap and military-inspired design",
                price: 1499,
                originalPrice: 2199,
                image: "https://m.media-amazon.com/images/I/71YZzX0ONrL._UY1000_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 501,
                name: "Men's Moonphase Watch",
                description: "Sophisticated moonphase watch with calendar complication",
                price: 4599,
                originalPrice: 6599,
                image: "https://5.imimg.com/data5/ECOM/Default/2023/4/302015118/LI/QA/JS/9422220/men-moonphase-watch-mens-luxury-brand-wrist-watches-man-quartz-wristwatch-waterproof-241.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 502,
                name: "Men's Skeleton Watch",
                description: "Transparent skeleton watch showing intricate mechanical movement",
                price: 3799,
                originalPrice: 5499,
                image: "https://m.media-amazon.com/images/I/81rq9k4gh+L._UY1000_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 503,
                name: "Men's GMT Watch",
                description: "Dual timezone GMT watch with 24-hour bezel",
                price: 2999,
                originalPrice: 4299,
                image: "https://m.media-amazon.com/images/I/71pAGyY26fL._UY1000_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 504,
                name: "Men's Vintage Watch",
                description: "Retro vintage watch with distressed leather strap",
                price: 2199,
                originalPrice: 3299,
                image: "https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2020/01/Vintage-Inspired-Watches-Retro-Nostalgic-Design-Past-History-Historical-MM.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 505,
                name: "Men's Ceramic Watch",
                description: "Modern ceramic watch with scratch-resistant case",
                price: 3399,
                originalPrice: 4899,
                image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw6dd91320/images/Titan/Catalog/90148KD03_6.jpg?sw=600&sh=600",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 506,
                name: "Men's Tourbillon Watch",
                description: "Luxury tourbillon watch with exquisite craftsmanship",
                price: 8999,
                originalPrice: 12999,
                image: "https://winner-watch.com/cdn/shop/products/jpg_5aea8228-fff0-45b1-83a6-c89a78a21e4b_1024x1024.jpg?v=1623409714",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 507,
                name: "Men's Racing Watch",
                description: "Sporty racing watch with carbon fiber dial and tachymeter",
                price: 2599,
                originalPrice: 3799,
                image: "https://m.media-amazon.com/images/I/614DrZ8nMzL._UY1000_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 508,
                name: "Men's Bronze Watch",
                description: "Unique bronze watch that develops patina over time",
                price: 2899,
                originalPrice: 4199,
                image: "https://m.media-amazon.com/images/I/81DubarDY-L._UY1000_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 509,
                name: "Men's Minimalist Watch",
                description: "Clean minimalist watch with slim profile and mesh strap",
                price: 1699,
                originalPrice: 2499,
                image: "https://m.media-amazon.com/images/I/61jnLr4xMwL._UY1000_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 510,
                name: "Men's Power Reserve Watch",
                description: "Mechanical watch with power reserve indicator",
                price: 4199,
                originalPrice: 5999,
                image: "https://m.media-amazon.com/images/I/61+EI0SPLxL._UY1000_.jpg",
                special: false,
                sizes: ['One Size']
            }
                        
                    ],
                    
                    wallets: [
                        {
                id: 511,
                name: "Men's Leather Wallet",
                description: "Premium genuine leather wallet with multiple card slots and cash compartment",
                price: 799,
                originalPrice: 1199,
                image: "https://images.meesho.com/images/products/407869274/5bu1y_512.webp?width=512",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 512,
                name: "Men's RFID Blocking Wallet",
                description: "Secure RFID blocking wallet to protect against electronic theft",
                price: 899,
                originalPrice: 1299,
                image: "https://m.media-amazon.com/images/I/71pbaVHqoXL._UY1100_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 513,
                name: "Men's Minimalist Card Holder",
                description: "Slim card holder with capacity for 6 cards and ID window",
                price: 499,
                originalPrice: 799,
                image: "https://m.media-amazon.com/images/I/71TyEHNsF9L._UY1100_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 514,
                name: "Men's Bifold Wallet",
                description: "Classic bifold wallet with two-fold design and ample storage",
                price: 699,
                originalPrice: 1099,
                image: "https://images-cdn.ubuy.co.in/654fe26d90ebe85a9b3ff182-serman-brands-mens-slim-bifold-wallet.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 515,
                name: "Men's Trifold Wallet",
                description: "Practical trifold wallet with multiple compartments and coin pocket",
                price: 749,
                originalPrice: 1149,
                image: "https://3.imimg.com/data3/WP/QF/MY-11527663/500-500x500.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 516,
                name: "Men's Money Clip Wallet",
                description: "Slim wallet with integrated money clip for cash",
                price: 599,
                originalPrice: 899,
                image: "https://images-cdn.ubuy.co.in/681a11ac0aff6ef3ad0f3b68-serman-brands-front-pocket-wallet.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 517,
                name: "Men's Passcase Wallet",
                description: "Travel wallet with passport slot and multiple card holders",
                price: 999,
                originalPrice: 1499,
                image: "https://m.media-amazon.com/images/I/917gXeQWCgL._UY1100_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 518,
                name: "Men's Carbon Fiber Wallet",
                description: "Modern carbon fiber wallet with sleek design and durability",
                price: 849,
                originalPrice: 1249,
                image: "https://m.media-amazon.com/images/I/91FXl6-RaBL._UY1100_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 519,
                name: "Men's Vintage Distressed Wallet",
                description: "Aged leather wallet with rustic distressed finish",
                price: 899,
                originalPrice: 1349,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cdlzZ9Hzsv-venBu3IxePXq7wngXsG3xpQ&s",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 520,
                name: "Men's Front Pocket Wallet",
                description: "Compact front pocket wallet for comfortable carry",
                price: 649,
                originalPrice: 999,
                image: "https://images-cdn.ubuy.co.in/681a11ac0aff6ef3ad0f3b68-serman-brands-front-pocket-wallet.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 521,
                name: "Men's Zipper Wallet",
                description: "Secure zipper closure wallet with full-length coin compartment",
                price: 799,
                originalPrice: 1199,
                image: "https://5.imimg.com/data5/SELLER/Default/2024/4/410077244/KI/WO/BN/128100890/etah-500x500.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 522,
                name: "Men's Luxury Crocodile Wallet",
                description: "Exotic crocodile leather wallet with premium finish",
                price: 2499,
                originalPrice: 3499,
                image: "https://i.etsystatic.com/38678588/r/il/c58c20/6283756429/il_1080xN.6283756429_9rk0.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 523,
                name: "Men's Sports Wallet",
                description: "Durable sports wallet with water-resistant material",
                price: 549,
                originalPrice: 849,
                image: "https://img.tatacliq.com/images/i21//437Wx649H/MP000000024779516_437Wx649H_202412211247291.jpeg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 524,
                name: "Men's Metal Wallet",
                description: "Sleek metal wallet with magnetic money clip",
                price: 699,
                originalPrice: 1049,
                image: "https://m.media-amazon.com/images/I/91+-8buNY7L._UY1100_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 525,
                name: "Men's Travel Wallet",
                description: "Organized travel wallet with multiple slots for documents and cards",
                price: 899,
                originalPrice: 1349,
                image: "https://m.media-amazon.com/images/I/81vDnsFz24L._UY1100_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 526,
                name: "Men's Canvas Wallet",
                description: "Casual canvas wallet with durable construction",
                price: 449,
                originalPrice: 699,
                image: "https://5.imimg.com/data5/TH/VC/TO/SELLER-42137795/men-s-trifold-canvas-wallet-with-leather-trim-8-card-slot-rfid-wallet-notecase-olw26a.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 527,
                name: "Men's Slim Wallet",
                description: "Ultra-slim wallet with minimal bulk design",
                price: 599,
                originalPrice: 899,
                image: "https://www.jiomart.com/images/product/original/rvywpg1ae0/leather-slim-wallet-for-men-rfid-blocked-designer-multi-card-slot-leather-wallet-for-boys-maroon-product-images-rvywpg1ae0-5-202302181530.jpg?im=Resize=(500,630)",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 528,
                name: "Men's Business Card Holder Wallet",
                description: "Professional wallet with dedicated business card slots",
                price: 749,
                originalPrice: 1129,
                image: "https://m.media-amazon.com/images/I/71MrKrjY5pL._UY1100_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 529,
                name: "Men's Designer Logo Wallet",
                description: "Branded designer wallet with signature logo detailing",
                price: 1299,
                originalPrice: 1899,
                image: "https://m.media-amazon.com/images/I/71LG7EW+nDL._UY1100_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 530,
                name: "Men's Smart Wallet with Tracker",
                description: "High-tech wallet with built-in Bluetooth tracker",
                price: 1499,
                originalPrice: 2199,
                image: "https://m.media-amazon.com/images/I/712gFIqJdSL._UY1100_.jpg",
                special: false,
                sizes: ['One Size']
            }
                    ],
                    sunglasses: [
                        {
                id: 531,
                name: "Men's Aviator Sunglasses",
                description: "Classic aviator sunglasses with UV400 protection and metal frame",
                price: 1299,
                originalPrice: 1999,
                image: "https://5.imimg.com/data5/FI/FT/ZO/SELLER-84652450/men-sunglasses-500x500.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 532,
                name: "Men's Leather Dress Belt",
                description: "Premium leather dress belt with polished buckle",
                price: 899,
                originalPrice: 1399,
                image: "https://m.media-amazon.com/images/I/81dVFlfI9KL._UY1100_.jpg",
                special: true,
                sizes: ['32', '34', '36', '38', '40']
            },
            {
                id: 533,
                name: "Men's Wayfarer Sunglasses",
                description: "Iconic wayfarer style sunglasses with durable plastic frame",
                price: 1099,
                originalPrice: 1699,
                image: "https://funkytradition.com/cdn/shop/files/0_EL-Malus-Polarized-Square-Frame-Sunglasses-Men-Male-Night-Vision-Gray-Silver-Blue-Lens-Mirror_720a42c7-f7d6-4ee8-a85b-fbeec3d668e5.jpg?v=1723508387",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 534,
                name: "Men's Reversible Belt",
                description: "Versatile reversible belt with black and brown sides",
                price: 799,
                originalPrice: 1199,
                image: "https://redtape.com/cdn/shop/files/1_677873c9-8c38-47d4-a053-5156ad82c17b.jpg?v=1754284100&width=533",
                special: true,
                sizes: ['32', '34', '36', '38']
            },
            {
                id: 535,
                name: "Men's Polarized Sunglasses",
                description: "Polarized sunglasses with anti-glare technology",
                price: 1499,
                originalPrice: 2299,
                image: "https://5.imimg.com/data5/SELLER/Default/2021/4/PR/ZV/OF/42337993/razmaz-men-s-hd-polarized-sunglasses-brand-designer-pilot-polarized-male-sun-glasses-eyeglasses.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 536,
                name: "Men's Casual Web Belt",
                description: "Durable web belt with adjustable military-style buckle",
                price: 599,
                originalPrice: 899,
                image: "https://m.media-amazon.com/images/I/71mm16g5P0L._UY1100_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 537,
                name: "Men's Sports Sunglasses",
                description: "Wraparound sports sunglasses with rubber grips",
                price: 1399,
                originalPrice: 2099,
                image: "https://idee-eyewear.com/cdn/shop/files/IDS3047C2SG_3.jpg?v=1709298233",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 538,
                name: "Men's Designer Logo Belt",
                description: "Luxury designer belt with signature buckle",
                price: 1899,
                originalPrice: 2799,
                image: "https://image.made-in-china.com/202f0j00YOqiVaKlhhop/Wholesale-Luxury-Belts-Famous-Brands-for-Men-Designers-Belts-with-Lizard-Print.jpg",
                special: true,
                sizes: ['34', '36', '38', '40']
            },
            {
                id: 539,
                name: "Men's Retro Round Sunglasses",
                description: "Vintage-inspired round frame sunglasses",
                price: 999,
                originalPrice: 1599,
                image: "https://image.made-in-china.com/2f0j00zutkFPvrbKoq/Retro-Classic-Polarized-High-Def-Small-Round-Sunglasses-UV400-Custom-Logo-Sun-Glasses-for-Men-Women-Fashion-Vintage-Shades.webp",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 540,
                name: "Men's Formal Leather Belt",
                description: "Elegant formal belt with subtle stitching",
                price: 849,
                originalPrice: 1299,
                image: "https://assets.ajio.com/medias/sys_master/root/20230520/HKOQ/6467d1bdd55b7d0c63ca96ab/-473Wx593H-466171998-brown-MODEL.jpg",
                special: true,
                sizes: ['32', '34', '36', '38', '40']
            },
            {
                id: 541,
                name: "Men's Mirrored Sunglasses",
                description: "Stylish mirrored lenses with gradient effect",
                price: 1199,
                originalPrice: 1799,
                image: "https://m.media-amazon.com/images/I/61rcUapYHUL._UY1100_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 542,
                name: "Men's Braided Leather Belt",
                description: "Handcrafted braided leather belt with western style",
                price: 1099,
                originalPrice: 1699,
                image: "https://m.media-amazon.com/images/I/71g-GUrQHqL._UY1100_.jpg",
                special: true,
                sizes: ['32', '34', '36', '38']
            },
            {
                id: 543,
                name: "Men's Clip-On Sunglasses",
                description: "Magnetic clip-on sunglasses for prescription glasses",
                price: 699,
                originalPrice: 1099,
                image: "https://images-static.nykaa.com/media/catalog/product/9/a/9a125582181PMG4658_1.jpg?tr=w-500",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 544,
                name: "Men's Canvas Belt",
                description: "Casual canvas belt with leather trim",
                price: 549,
                originalPrice: 849,
                image: "https://m.media-amazon.com/images/I/81Acfh-gWgL._UY1100_.jpg",
                special: true,
                sizes: ['32', '34', '36', '38']
            },
            {
                id: 545,
                name: "Men's Cat Eye Sunglasses",
                description: "Fashionable cat eye frame sunglasses",
                price: 1299,
                originalPrice: 1999,
                image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-grey-full-rim-round-vincent-chase-polarized-the-metal-edit-vc-s13112-c4-polarized-sunglasses_vincent-chase-vc-s13112-c4-sunglasses_sunglasses_j_3397_1_1_5july23.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 546,
                name: "Men's Reversible Dress Belt",
                description: "Formal reversible belt with quick-release buckle",
                price: 949,
                originalPrice: 1449,
                image: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000021857982_437Wx649H_202404071644501.jpeg",
                special: true,
                sizes: ['34', '36', '38', '40']
            },
            {
                id: 547,
                name: "Men's Gradient Lens Sunglasses",
                description: "Sunglasses with gradient lenses for style and function",
                price: 999,
                originalPrice: 1549,
                image: "https://m.media-amazon.com/images/I/51+kWVCAzDL._UY1100_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 548,
                name: "Men's Elastic Stretch Belt",
                description: "Comfortable elastic stretch belt with adjustable fit",
                price: 699,
                originalPrice: 1049,
                image: "https://m.media-amazon.com/images/I/71xcuEFwqhL._UY1100_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 549,
                name: "Men's Oversized Sunglasses",
                description: "Large oversized frame sunglasses for maximum coverage",
                price: 1399,
                originalPrice: 2149,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/23178720/2023/6/26/105e5da8-081f-4cc6-b918-bfb7658341671687763533136-Eyewearlabs-Oversized-Lens-with-Polarised-and-UV-Protected-S-2.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 550,
                name: "Men's Leather & Chain Belt",
                description: "Trendy leather belt with metal chain detail",
                price: 1199,
                originalPrice: 1799,
                image: "https://m.media-amazon.com/images/I/81JtjLTsVcL._UY1100_.jpg",
                special: true,
                sizes: ['32', '34', '36', '38']
            }
                    ],
                    
                    Rings: [
                       {
                id: 551,
                name: "Men's Silver Signet Ring",
                description: "Classic sterling silver signet ring with engraved design",
                price: 1899,
                originalPrice: 2799,
                image: "https://m.media-amazon.com/images/I/613UwAEHjiL._UY1100_.jpg",
                special: false,
                sizes: ['8', '9', '10', '11', '12']
            },
            {
                id: 552,
                name: "Men's Gold Chain Necklace",
                description: "14K gold chain necklace with secure lobster clasp",
                price: 3499,
                originalPrice: 4999,
                image: "https://m.media-amazon.com/images/I/61EiJg16o2L._UY1100_.jpg",
                special: true,
                sizes: ['18"', '20"', '22"', '24"']
            },
            {
                id: 553,
                name: "Men's Tungsten Carbide Ring",
                description: "Durable tungsten carbide ring with brushed finish",
                price: 2199,
                originalPrice: 3299,
                image: "https://m.media-amazon.com/images/I/61n4JjFyX4L._UY1100_.jpg",
                special: false,
                sizes: ['8', '9', '10', '11', '12']
            },
            {
                id: 554,
                name: "Men's Silver Cuban Chain",
                description: "Sterling silver Cuban link chain with high polish",
                price: 2899,
                originalPrice: 4299,
                image: "https://m.media-amazon.com/images/I/71Dak0eMeyL._UY1100_.jpg",
                special: true,
                sizes: ['20"', '22"', '24"']
            },
            {
                id: 555,
                name: "Men's Black Onyx Ring",
                description: "Elegant black onyx stone ring in silver setting",
                price: 1599,
                originalPrice: 2399,
                image: "https://images-cdn.ubuy.co.in/63cbfda920045f1cf67049fd-mens-black-onyx-ring-silver-square-onyx.jpg",
                special: false,
                sizes: ['9', '10', '11', '12']
            },
            {
                id: 556,
                name: "Men's Rope Chain Necklace",
                description: "Classic rope chain in 14K yellow gold",
                price: 3199,
                originalPrice: 4799,
                image: "https://palmonas.com/cdn/shop/products/1_182adae1-9887-4e14-9203-abf43125dfd4.jpg?v=1744527319",
                special: true,
                sizes: ['20"', '22"', '24"']
            },
            {
                id: 557,
                name: "Men's Celtic Knot Ring",
                description: "Intricate Celtic knot design in sterling silver",
                price: 1399,
                originalPrice: 2099,
                image: "https://m.media-amazon.com/images/I/61ZBeXIu33L._UY1100_.jpg",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 558,
                name: "Men's Stainless Steel Chain",
                description: "Durable stainless steel chain with anti-tarnish coating",
                price: 899,
                originalPrice: 1399,
                image: "https://i.pinimg.com/736x/87/40/b6/8740b68ac6e37541c2bdc265c481438b.jpg",
                special: true,
                sizes: ['18"', '20"', '22"']
            },
            {
                id: 559,
                name: "Men's Diamond Accent Ring",
                description: "Tungsten ring with genuine diamond accents",
                price: 2799,
                originalPrice: 4199,
                image: "https://www.zarkan.co/cdn/shop/files/5_52044df2-1cb1-47df-8c9b-c27c25e4572c_600x.progressive.jpg?v=1741245492",
                special: false,
                sizes: ['9', '10', '11', '12']
            },
            {
                id: 560,
                name: "Men's Leather Cord Necklace",
                description: "Leather cord necklace with metal pendant",
                price: 699,
                originalPrice: 1099,
                image: "https://www.thementhing.com/cdn/shop/files/the-men-thing-leather-necklace-anything-for-you-silver-vintage-alloy-silver-bullet-pendant-with-adjustable-pure-leather-cord-necklace-for-men-boys-1170971263.png?v=1748880259",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 561,
                name: "Men's Titanium Wedding Ring",
                description: "Lightweight titanium wedding band with comfort fit",
                price: 1699,
                originalPrice: 2549,
                image: "https://www.romanjewelers.com/upload/blog/1623699758_post_image.jpg",
                special: false,
                sizes: ['8', '9', '10', '11', '12']
            },
            {
                id: 562,
                name: "Men's Gold Figaro Chain",
                description: "10K gold Figaro chain with traditional pattern",
                price: 2999,
                originalPrice: 4499,
                image: "https://m.media-amazon.com/images/I/51O9XRBzT8L._UY1100_.jpg",
                special: true,
                sizes: ['20"', '22"', '24"']
            },
            {
                id: 563,
                name: "Men's Black Zirconium Ring",
                description: "Matte black zirconium ring with subtle texture",
                price: 1999,
                originalPrice: 2999,
                image: "https://www.ainsworthjewellers.com/pub/media/catalog/product/cache/d189cb11065f88b944f1b7533bb05111/u/n/untitled_design_1.png",
                special: false,
                sizes: ['9', '10', '11', '12']
            },
            {
                id: 564,
            name: "Men's Silver Box Chain",
                description: "Sterling silver box chain with secure clasp",
                price: 1299,
                originalPrice: 1999,
                image: "https://ninetwofive.com/cdn/shop/files/mens-box-chain-necklace-Kamal-Model-photo-1-mobile-NineTwoFive_dcb3547d-9c2e-4ebf-9b82-9e28d9dc6707.jpg?v=1700032068&width=1200",
                special: true,
                sizes: ['18"', '20"', '22"']
            },
            {
                id: 565,
                name: "Men's Wood Inlay Ring",
                description: "Tungsten ring with natural wood inlay",
                price: 1799,
                originalPrice: 2699,
                image: "https://m.media-amazon.com/images/I/61T3a0ThjKL.jpg",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 566,
                name: "Men's Gold Rope Bracelet",
                description: "14K gold rope bracelet with adjustable fit",
                price: 2399,
                originalPrice: 3599,
                image: "https://twistedpendant.com/cdn/shop/files/3_e41876ed-3328-475a-a13d-1a948fc83c3f.png?v=1749029626&width=1000",
                special: true,
                sizes: ['8"', '8.5"', '9"']
            },
            {
                id: 567,
                name: "Men's Carbon Fiber Ring",
                description: "Modern carbon fiber ring with metallic accents",
                price: 1599,
                originalPrice: 2399,
                image: "https://gladstonesjewellers.co.uk/images/unique-co-tungsten-7mm-black-silver-carbon-fibre-inlay-ring-tur-172-p6064-35594_image.jpg",
                special: false,
                sizes: ['9', '10', '11', '12']
            },
            {
                id: 568,
                name: "Men's Silver Curb Chain",
                description: "Classic curb chain in sterling silver",
                price: 1499,
                originalPrice: 2249,
                image: "https://i.ebayimg.com/images/g/ldoAAOSwbslmhW4e/s-l1200.jpg",
                special: true,
                sizes: ['20"', '22"', '24"']
            },
            {
                id: 569,
                name: "Men's Birthstone Ring",
                description: "Sterling silver ring with genuine birthstone",
                price: 1699,
                originalPrice: 2549,
                image: "https://kinclimg2.bluestone.com/f_jpg,c_scale,w_828,q_80,b_rgb:f0f0f0/giproduct/BISP0103R661_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-85111.png",
                special: false,
                sizes: ['9', '10', '11', '12']
            },
            {
                id: 570,
                name: "Men's Gold Herringbone Chain",
                description: "Elegant herringbone chain in 14K gold",
                price: 3799,
                originalPrice: 5699,
                image: "https://spicyice.com/cdn/shop/products/herringbone1.jpg",
                special: true,
                sizes: ['20"', '22"', '24"']
            }
                    ],
                },
                womenAccessories: {
                    handbags: [
                       {
                id: 571,
                name: "Women's Leather Handbag",
                description: "Elegant leather handbag with multiple compartments and gold hardware",
                price: 2499,
                originalPrice: 3799,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLg71ClvtEtzYN24lQdSxA_kQg7YVzvymQoA&s",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 572,
                name: "Women's Clutch Wallet",
                description: "Stylish clutch wallet with wristlet and card slots",
                price: 1299,
                originalPrice: 1999,
                image: "https://www.ultrabasic.com/cdn/shop/products/product-image-1435722094.jpg?v=1592660640&width=1445",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 573,
                name: "Women's Tote Bag",
                description: "Spacious tote bag with sturdy handles and interior pockets",
                price: 1899,
                originalPrice: 2899,
                image: "https://img.tatacliq.com/images/i22//658Wx734H/MP000000025126281_658Wx734H_202501241006171.jpeg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 574,
                name: "Women's Crossbody Bag",
                description: "Convenient crossbody bag with adjustable strap",
                price: 1599,
                originalPrice: 2399,
                image: "https://m.media-amazon.com/images/I/71T8EVp49iL._UY1000_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 575,
                name: "Women's Designer Wallet",
                description: "Premium designer wallet with multiple card holders and coin pocket",
                price: 1799,
                originalPrice: 2699,
                image: "https://www.ultrabasic.com/cdn/shop/products/product-image-1435722094.jpg?v=1592660640&width=1445",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 576,
                name: "Women's Backpack Purse",
                description: "Fashionable backpack purse with leather accents",
                price: 2199,
                originalPrice: 3299,
                image: "https://m.media-amazon.com/images/I/51E3DyEOqDL._UY1100_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 577,
                name: "Women's Mini Bag",
                description: "Trendy mini bag with chain strap for evening wear",
                price: 1399,
                originalPrice: 2099,
                image: "https://www.sojoee.com/wp-content/uploads/2022/07/BG-1095-womens-orange-mini-handbag.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 578,
                name: "Women's RFID Blocking Wallet",
                description: "Secure wallet with RFID protection technology",
                price: 1499,
                originalPrice: 2249,
                image: "https://m.media-amazon.com/images/I/71h32QH6F6L._UY1100_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 579,
                name: "Women's Hobo Bag",
                description: "Slouchy hobo bag with soft leather and magnetic closure",
                price: 1999,
                originalPrice: 2999,
                image: "https://m.media-amazon.com/images/I/81mQvkzI5HL._UY1000_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 580,
                name: "Women's Travel Wallet",
                description: "Organized travel wallet with passport slot and multiple compartments",
                price: 1699,
                originalPrice: 2549,
                image: "https://m.media-amazon.com/images/I/81V2xsDZuLL._UY1100_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 581,
                name: "Women's Satchel Bag",
                description: "Structured satchel bag with top handle and crossbody strap",
                price: 2299,
                originalPrice: 3499,
                image: "https://m.media-amazon.com/images/I/61oQRlhSVSL._UY1000_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 582,
                name: "Women's Coin Purse",
                description: "Compact coin purse with zipper closure",
                price: 699,
                originalPrice: 1099,
                image: "https://m.media-amazon.com/images/I/81e1LT38qeL._UY1000_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 583,
                name: "Women's Beach Bag",
                description: "Large beach bag with waterproof lining and pockets",
                price: 1199,
                originalPrice: 1799,
                image: "https://m.media-amazon.com/images/I/81uP2wP+4iL._UY1100_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 584,
                name: "Women's Bifold Wallet",
                description: "Classic bifold wallet with bill compartments and card slots",
                price: 999,
                originalPrice: 1499,
                image: "https://m.media-amazon.com/images/I/61Fm8pzWjdL._UY1100_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 585,
                name: "Women's Bucket Bag",
                description: "Trendy bucket bag with drawstring closure",
                price: 1799,
                originalPrice: 2699,
                image: "https://m.media-amazon.com/images/I/71lEoR9YFKL._UY1000_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 586,
                name: "Women's Wristlet Wallet",
                description: "Practical wristlet wallet with detachable strap",
                price: 1099,
                originalPrice: 1699,
                image: "https://m.media-amazon.com/images/I/71Yu9J3YUoL._UY1000_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 587,
                name: "Women's Top Handle Bag",
                description: "Elegant top handle bag for formal occasions",
                price: 2599,
                originalPrice: 3899,
                image: "https://m.media-amazon.com/images/I/51Bc7B16aoL._UY1000_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 588,
                name: "Women's Zip Around Wallet",
                description: "Secure zip around wallet with full enclosure",
                price: 1399,
                originalPrice: 2099,
                image: "https://m.media-amazon.com/images/I/61m2YW8ynjL._UY1000_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 589,
                name: "Women's Shoulder Bag",
                description: "Versatile shoulder bag with adjustable strap",
                price: 1699,
                originalPrice: 2549,
                image: "https://s.alicdn.com/@sc04/kf/Hc2cf4b65c9ae44cca6ad2cc582f04fc10.jpg_720x720q50.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 590,
                name: "Women's Card Holder",
                description: "Slim card holder with multiple slots and ID window",
                price: 799,
                originalPrice: 1199,
                image: "https://i.etsystatic.com/15615725/r/il/31a4e0/3189558264/il_570xN.3189558264_lji8.jpg",
                special: false,
                sizes: ['One Size']
            }
                        
                    ],
                    
                    
                    sunglasses: [
                         {
                id: 591,
                name: "Women's Cat-Eye Sunglasses",
                description: "Trendy cat-eye sunglasses with UV400 protection and acetate frame",
                price: 1199,
                originalPrice: 1799,
                image: "https://www.littledesire.com/uploads/products/y1614701996mlittledesire-cateye-sunglass.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 592,
                name: "Women's Aviator Sunglasses",
                description: "Classic aviator style with gold metal frame and gradient lenses",
                price: 1299,
                originalPrice: 1999,
                image: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/SearchINT/Lge/100524.jpg?im=Resize,width=450",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 593,
                name: "Women's Oversized Sunglasses",
                description: "Large oversized frames for maximum coverage and glamour",
                price: 1499,
                originalPrice: 2299,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/26180248/2024/1/10/fb737698-3f6b-4b36-8857-62f533b6d81c1704866150876CarltonLondonWomenOversizedSunglasseswithUVProtectedLensCLSW6.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 594,
                name: "Women's Round Frame Sunglasses",
                description: "Vintage-inspired round frames with blue light filtering",
                price: 1099,
                originalPrice: 1699,
                image: "https://m.media-amazon.com/images/I/71xx06bwI7L._UY1100_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 595,
                name: "Women's Polarized Sunglasses",
                description: "Polarized lenses with anti-glare technology and stylish design",
                price: 1699,
                originalPrice: 2599,
                image: "https://framekart.in/cdn/shop/files/rn-image_picker_lib_temp_fe46ab57-c8e7-4853-a79c-172ebb3b0b85.jpg?v=1716066816",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 596,
                name: "Women's Designer Logo Sunglasses",
                description: "Luxury designer sunglasses with signature logo details",
                price: 2199,
                originalPrice: 3299,
                image: "https://www.techzonz.com/wp-content/uploads/2023/07/62590-tnvesi.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 597,
                name: "Women's Sport Sunglasses",
                description: "Wraparound sport sunglasses with rubber nose pads",
                price: 1399,
                originalPrice: 2099,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/MARCH/19/I2zkZbaa_0dfd862dfc044348a2ff0c34af735eee.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 598,
                name: "Women's Butterfly Sunglasses",
                description: "Elegant butterfly shape with rhinestone accents",
                price: 1599,
                originalPrice: 2399,
                image: "https://m.media-amazon.com/images/I/81P2ve9cXzL._UY1100_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 599,
                name: "Women's Retro Square Sunglasses",
                description: "1980s inspired square frames with tinted lenses",
                price: 999,
                originalPrice: 1499,
                image: "https://www.shopsocialthreads.com/cdn/shop/files/ST_020325_8884_grande.jpg?v=1738770356",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 600,
                name: "Women's Mirrored Sunglasses",
                description: "Fashionable mirrored lenses with gradient effect",
                price: 1299,
                originalPrice: 1999,
                image: "https://img.joomcdn.net/83aad0585b94bfc58b14d83570aa7cfa8e50e43f_original.jpeg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 601,
                name: "Women's Wayfarer Sunglasses",
                description: "Iconic wayfarer style with durable acetate construction",
                price: 1199,
                originalPrice: 1799,
                image: "https://rukminim2.flixcart.com/image/704/844/kvzkosw0/sunglass/h/g/j/0rb2193901-5853-m-ray-ban-original-imag8rzg3jyavchf.jpeg?q=90&crop=false",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 602,
                name: "Women's Gradient Lens Sunglasses",
                description: "Stylish gradient lenses that fade from dark to light",
                price: 1399,
                originalPrice: 2099,
                image: "https://images-cdn.ubuy.co.in/65ef1536a2084c09877cc1de-polarized-ladies-sunglasses-women.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 603,
                name: "Women's Rimless Sunglasses",
                description: "Minimalist rimless design for lightweight comfort",
                price: 1799,
                originalPrice: 2699,
                image: "https://img.joomcdn.net/7f9c04c103746448fefedbaa9872701f956f91fe_original.jpeg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 604,
                name: "Women's Cat-Eye with Rhinestones",
                description: "Glamorous cat-eye frames with crystal rhinestone details",
                price: 1899,
                originalPrice: 2899,
                image: "https://cdn.vooglam.com/product/fa56f847f227a067fe68f6171556eee1.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 605,
                name: "Women's Oval Sunglasses",
                description: "Soft oval frames with UV protection and comfort fit",
                price: 1099,
                originalPrice: 1699,
                image: "https://m.media-amazon.com/images/I/818D07XWxTL._UY1100_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 606,
                name: "Women's Clip-On Sunglasses",
                description: "Magnetic clip-on sunglasses for prescription glasses",
                price: 899,
                originalPrice: 1399,
                image: "https://yourspex.com/cdn/shop/files/wine_oval_clip-on_eyeglasses_for_men_and_women_9.jpg?v=1744712806&width=1445",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 607,
                name: "Women's Geometric Sunglasses",
                description: "Modern geometric shaped frames with polarized lenses",
                price: 1599,
                originalPrice: 2399,
                image: "https://m.media-amazon.com/images/I/51CVGZPy9-L._UY1000_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 608,
                name: "Women's Heart-Shaped Sunglasses",
                description: "Playful heart-shaped frames for fun summer style",
                price: 999,
                originalPrice: 1499,
                image: "https://img.joomcdn.net/c811d57ff1bab2fe1d415ee2d949d659c9830599_original.jpeg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 609,
                name: "Women's Luxury Metal Sunglasses",
                description: "Premium metal frames with intricate detailing",
                price: 1999,
                originalPrice: 2999,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4uW_5Ct8JGL6tebd84Rxk4yV8G4TZ8X1vqg&s",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 610,
                name: "Women's Colored Lens Sunglasses",
                description: "Fashion-forward colored lenses in rose gold tint",
                price: 1299,
                originalPrice: 1999,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/26883092/2025/6/20/6bd13dd7-1781-416c-bb9e-5923a629bc6e1750407058947-Voyage-Unisex-Oval-Sunglasses-with-UV-Protected-Lens-B80580M-1.jpg",
                special: true,
                sizes: ['One Size']
            }
                    ],
                    Rings: [
                       {
                id: 611,
                name: "Women's Diamond Tennis Bracelet",
                description: "Elegant tennis bracelet with genuine diamond accents",
                price: 4599,
                originalPrice: 6899,
                image: "https://m.media-amazon.com/images/I/71nXnk5YpzL._UY1100_.jpg",
                special: false,
                sizes: ['7"', '7.5"', '8"']
            },
            {
                id: 612,
                name: "Women's Gold Stacking Rings",
                description: "Set of three 14K gold stacking rings for layered look",
                price: 1899,
                originalPrice: 2849,
                image: "https://cdn.jewelryimages.net/galleries/stuller_inc/124498105P.jpg?v=17",
                special: true,
                sizes: ['6', '7', '8', '9']
            },
            {
                id: 613,
                name: "Women's Pearl Necklace",
                description: "Classic freshwater pearl necklace with gold clasp",
                price: 2199,
                originalPrice: 3299,
                image: "https://m.media-amazon.com/images/I/71E3EGHVoxL._UY1100_.jpg",
                special: false,
                sizes: ['16"', '18"', '20"']
            },
            {
                id: 614,
                name: "Women's Statement Cocktail Ring",
                description: "Bold cocktail ring with large cubic zirconia stone",
                price: 1299,
                originalPrice: 1949,
                image: "https://rudradhan.com/cdn/shop/files/jadau-cocktail-ring_8.jpg?v=1756359884&width=1000",
                special: true,
                sizes: ['7', '8', '9']
            },
            {
                id: 615,
                name: "Women's Delicate Chain Necklace",
                description: "Fine delicate chain necklace with pendant option",
                price: 899,
                originalPrice: 1349,
                image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/7/37378d4MNT0450_G-0.jpg?rnd=20200526195200&tr=w-512",
                special: false,
                sizes: ['16"', '18"', '20"']
            },
            {
                id: 616,
                name: "Women's Birthstone Ring",
                description: "Sterling silver ring with genuine birthstone",
                price: 1499,
                originalPrice: 2249,
                image: "https://i.etsystatic.com/20014328/r/il/511e4c/4911104984/il_570xN.4911104984_10yx.jpg",
                special: true,
                sizes: ['6', '7', '8', '9']
            },
            {
                id: 617,
                name: "Women's Layered Necklace Set",
                description: "Set of three layered gold necklaces of different lengths",
                price: 2499,
                originalPrice: 3749,
                image: "https://www.indiatrendshop.com/cdn/shop/products/vne21566a_cbe07922-42df-44e9-8027-b8d9151c5a21_grande.jpg?v=1754301321",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 618,
                name: "Women's Silver Charm Bracelet",
                description: "Sterling silver bracelet with customizable charms",
                price: 1699,
                originalPrice: 2549,
                image: "https://erisilvers.com/cdn/shop/files/4_014d9883-d696-4947-851a-bcd05dbf947b_1066x.jpg?v=1733821608",
                special: true,
                sizes: ['7"', '7.5"', '8"']
            },
            {
                id: 619,
                name: "Women's Gold Hoop Earrings",
                description: "14K gold hoop earrings in various sizes",
                price: 1399,
                originalPrice: 2099,
                image: "https://kinclimg4.bluestone.com/f_jpg,c_scale,w_828,q_80,b_rgb:f0f0f0/giproduct/BIAB0654H06_YAA18PRWHXXXXXXXX_ABCD00-PICS-00004-1024-50038.png",
                special: false,
                sizes: ['Small', 'Medium', 'Large']
            },
            {
                id: 620,
                name: "Women's Diamond Solitaire Ring",
                description: "Classic solitaire ring with brilliant cut diamond",
                price: 3899,
                originalPrice: 5849,
                image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/22136alfreda-r/diamond/diamond-Brillant_AAA/alloycolour/red.jpg",
                special: true,
                sizes: ['6', '7', '8', '9']
            },
            {
                id: 621,
                name: "Women's Pendant Necklace",
                description: "Gold pendant necklace with meaningful symbol",
                price: 1099,
                originalPrice: 1649,
                image: "https://www.azilaa.com/pics/Vintage-style-Woman-pendant-designer-necklace-41646_1_full.jpg",
                special: false,
                sizes: ['18"', '20"', '22"']
            },
            {
                id: 622,
                name: "Women's Stackable Bangles",
                description: "Set of mixed metal stackable bangles",
                price: 1799,
                originalPrice: 2699,
                image: "https://i.etsystatic.com/31556734/r/il/9ad8cd/3335179111/il_1080xN.3335179111_9nek.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 623,
                name: "Women's Emerald Cut Ring",
                description: "Elegant emerald cut stone in white gold setting",
                price: 2799,
                originalPrice: 4199,
                image: "https://cdn.shopaccino.com/jewellery/products/the-vivacious-emerald-gold-ring-321698_m.jpg",
                special: false,
                sizes: ['7', '8', '9']
            },
            {
                id: 624,
                name: "Women's Choker Necklace",
                description: "Trendy velvet choker with pearl accent",
                price: 699,
                originalPrice: 1049,
                image: "https://images-static.nykaa.com/media/catalog/product/4/4/44c654cDHN432_1.jpg?tr=w-500",
                special: true,
                sizes: ['14"', '15"', '16"']
            },
            {
                id: 625,
                name: "Women's Moon Phase Ring",
                description: "Mystical moon phase design with celestial symbols",
                price: 1599,
                originalPrice: 2399,
                image: "https://m.media-amazon.com/images/I/51XHgCCBFXL._UY1100_.jpg",
                special: false,
                sizes: ['6', '7', '8']
            },
            {
                id: 626,
                name: "Women's Chain Bracelet",
                description: "Dainty chain bracelet with toggle clasp",
                price: 799,
                originalPrice: 1199,
                image: "https://5.imimg.com/data5/SELLER/Default/2022/9/PB/NQ/GC/113400404/vembley-combo-of-4-gold-plated-chain-linked-chunky-bracelets-for-women-and-girls.jpg",
                special: true,
                sizes: ['7"', '7.5"', '8"']
            },
            {
                id: 627,
                name: "Women's Art Deco Ring",
                description: "Vintage art deco style ring with geometric patterns",
                price: 1999,
                originalPrice: 2999,
                image: "https://i.pinimg.com/736x/40/e6/2b/40e62b9c7f193f43f51be84c4555022e.jpg",
                special: false,
                sizes: ['7', '8', '9']
            },
            {
                id: 628,
                name: "Women's Lariat Necklace",
                description: "Versatile lariat necklace that can be worn multiple ways",
                price: 1399,
                originalPrice: 2099,
                image: "https://images-static.nykaa.com/media/catalog/product/9/d/9dbe5b6NK391_2.jpg?tr=w-500",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 629,
                name: "Women's Signet Ring",
                description: "Personalizable signet ring for monogram or initial",
                price: 1699,
                originalPrice: 2549,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlRz2qCpyoHHKvJJNj0TWikoFoFSi7k2ZtA&s",
                special: false,
                sizes: ['7', '8', '9']
            },
            {
                id: 630,
                name: "Women's Pearl Drop Earrings",
                description: "Elegant pearl drop earrings with gold findings",
                price: 1199,
                originalPrice: 1799,
                image: "https://m.media-amazon.com/images/I/71iQMqMUROL._UY1100_.jpg",
                special: true,
                sizes: ['One Size']
            }
                    ],
                    watches: [
                         {
                id: 631,
                name: "Women's Diamond Accent Watch",
                description: "Elegant watch with diamond markers and leather strap",
                price: 2899,
                originalPrice: 4349,
                image: "https://www.soosi.co.in/cdn/shop/products/WhatsApp_Image_2019-11-07_at_11.24.23_1_2048x.jpg?v=1573111799",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 632,
                name: "Women's Rose Gold Watch",
                description: "Stylish rose gold watch with mother of pearl dial",
                price: 2199,
                originalPrice: 3299,
                image: "https://m.media-amazon.com/images/I/91gwm1aX0lL._UY1000_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 633,
                name: "Women's Luxury Smart Watch",
                description: "Premium smart watch with fitness tracking and notifications",
                price: 4999,
                originalPrice: 7499,
                image: "https://m.media-amazon.com/images/I/513dm11vPsL._UF1000,1000_QL80_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 634,
                name: "Women's Minimalist Watch",
                description: "Slim minimalist watch with mesh metal strap",
                price: 1599,
                originalPrice: 2399,
                image: "https://m.media-amazon.com/images/I/61003Ns8wlL._UY1000_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 635,
                name: "Women's Ceramic Watch",
                description: "Scratch-resistant ceramic watch with sleek design",
                price: 2799,
                originalPrice: 4199,
                image: "https://m.media-amazon.com/images/I/61HYNgsMQmL._UY1000_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 636,
                name: "Women's Vintage Chronograph",
                description: "Retro-inspired chronograph with multiple sub-dials",
                price: 2399,
                originalPrice: 3599,
                image: "https://m.media-amazon.com/images/I/61XDzEtM4eL._UY1000_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 637,
                name: "Women's Two-Tone Watch",
                description: "Classic two-tone watch with gold and stainless steel",
                price: 2699,
                originalPrice: 4049,
                image: "https://m.media-amazon.com/images/I/61wa85PkWLL._UY1000_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 638,
                name: "Women's Sports Watch",
                description: "Water-resistant sports watch with silicone strap",
                price: 1899,
                originalPrice: 2849,
                image: "https://v2awatch.com/cdn/shop/files/V2A-OT-1836-Pink.jpg?v=1754308956&width=500",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 639,
                name: "Women's Moonphase Watch",
                description: "Sophisticated moonphase complication with leather strap",
                price: 3799,
                originalPrice: 5699,
                image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw782da2f1/images/Titan/Catalog/2590KM01_1.jpg?sw=800&sh=800",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 640,
                name: "Women's Fashion Bracelet Watch",
                description: "Watch designed like a piece of jewelry with crystal accents",
                price: 1999,
                originalPrice: 2999,
                image: "https://m.media-amazon.com/images/I/71YTxSvJEGL._UY1000_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 641,
                name: "Women's Skeleton Watch",
                description: "Transparent dial showing intricate mechanical movement",
                price: 3299,
                originalPrice: 4949,
                image: "https://theglossarymagazine.com/wp-content/uploads/elementor/thumbs/Patek5180_1R_001-q6ubjbvhaano5we7scrnx4jppcdpc1q2wfi3oh0cg0.webp",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 642,
                name: "Women's Dress Watch",
                description: "Elegant dress watch with Roman numerals and alligator strap",
                price: 2499,
                originalPrice: 3749,
                image: "https://m.media-amazon.com/images/I/61ssb29yO1L._UY1000_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 643,
                name: "Women's Digital Watch",
                description: "Modern digital watch with multiple functions and backlight",
                price: 1399,
                originalPrice: 2099,
                image: "https://images.meesho.com/images/products/548275936/7igfp_512.webp?width=512",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 644,
                name: "Women's Gold-Tone Watch",
                description: "Luxurious gold-tone watch with crystal bezel",
                price: 2099,
                originalPrice: 3149,
                image: "https://m.media-amazon.com/images/I/71kIsQ2z4rL._UY1000_.jpg",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 645,
                name: "Women's Automatic Watch",
                description: "Self-winding automatic movement with exhibition case back",
                price: 4199,
                originalPrice: 6299,
                image: "https://www.watchgecko.com/cdn/shop/articles/Nodus-Unity-duo.jpg?v=1691745482",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 646,
                name: "Women's Pearl Watch",
                description: "Delicate watch with pearl accents and leather strap",
                price: 2299,
                originalPrice: 3449,
                image: "https://www.soosi.co.in/cdn/shop/products/WhatsAppImage2020-07-03at20.06.19_1200x1200.jpg?v=1593787329",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 647,
                name: "Women's Aviator Watch",
                description: "Pilot-inspired watch with large numerals and luminous hands",
                price: 2599,
                originalPrice: 3899,
                image: "https://www.aviationkart.com/cdn/shop/products/S74bf14eea0bc40ce94324f93742626a1w_2048x.jpg?v=1691223409",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 648,
                name: "Women's Slim Profile Watch",
                description: "Ultra-slim watch profile for comfortable wear",
                price: 1799,
                originalPrice: 2699,
                image: "https://universalwatchcompany.com/cdn/shop/files/titan-ns95181wm01-slimline-quartz-analog-mother-of-pearl-rose-gold-stainless-steel-strap-watch..webp?v=1737462926&width=533",
                special: true,
                sizes: ['One Size']
            },
            {
                id: 649,
                name: "Women's Diamond Bezel Watch",
                description: "Luxury watch with diamond-studded bezel",
                price: 4599,
                originalPrice: 6899,
                image: "https://m.media-amazon.com/images/I/71QjVhWXZCL._UY1000_.jpg",
                special: false,
                sizes: ['One Size']
            },
            {
                id: 650,
                name: "Women's Color Block Watch",
                description: "Trendy color block design with silicone strap",
                price: 1499,
                originalPrice: 2249,
                image: "https://5.imimg.com/data5/OF/YZ/XA/SELLER-32675906/women-richbro-analog-purple-dial-watch-500x500.jpg",
                special: true,
                sizes: ['One Size']
            }
                    ],

                }
            },
            shoes: {
                menShoes: {
                    sneakers: [
                        {
                id: 651,
                name: "Men's Running Shoes",
                description: "Lightweight running shoes with advanced cushion technology",
                price: 2999,
                originalPrice: 4599,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/13444428/2021/3/22/535a46e8-d7cf-4913-9c00-b300dbdc4b9b1616407689325-ADIDAS-Men-Sports-Shoes-9321616407689021-1.jpg",
                special: true,
                sizes: ['6', '7', '8', '9', '10', '11']
            },
            {
                id: 652,
                name: "Men's Basketball Sneakers",
                description: "High-top basketball shoes with ankle support and grip",
                price: 3499,
                originalPrice: 5299,
                image: "https://images-cdn.ubuy.co.in/654f92968df7cc48833e2aa1-basketball-shoes-men-sports-shoes-high.jpg",
                special: false,
                sizes: ['7', '8', '9', '10', '11', '12']
            },
            {
                id: 653,
                name: "Men's Casual Sneakers",
                description: "Everyday casual sneakers with comfortable memory foam",
                price: 2299,
                originalPrice: 3499,
                image: "https://www.brandkiosk.in/cdn/shop/products/6600682939.jpg?v=1708090205",
                special: true,
                sizes: ['6', '7', '8', '9', '10', '11']
            },
            {
                id: 654,
                name: "Men's Skate Shoes",
                description: "Durable skate shoes with reinforced toe and grip tape resistance",
                price: 2799,
                originalPrice: 4299,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/30245250/2024/7/18/4f05bd79-a949-45ec-9e29-41714b4a87441721296823457WALKWAYbyMetroMenSkateShoes1.jpg",
                special: false,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 655,
                name: "Men's Designer Sneakers",
                description: "Premium designer sneakers with luxury materials",
                price: 5999,
                originalPrice: 8999,
                image: "https://i.pinimg.com/736x/64/4a/85/644a854a0f1d449d4c3a8cde5c94503d.jpg",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 656,
                name: "Men's Trail Running Shoes",
                description: "Water-resistant trail runners with aggressive tread",
                price: 3199,
                originalPrice: 4899,
                image: "https://m.media-amazon.com/images/I/51wHzV7St5L._UY1000_.jpg",
                special: false,
                sizes: ['8', '9', '10', '11', '12']
            },
            {
                id: 657,
                name: "Men's Retro Sneakers",
                description: "Vintage-inspired retro sneakers with classic design",
                price: 2499,
                originalPrice: 3799,
                image: "https://i.pinimg.com/736x/57/7a/06/577a064d9b03e744488210e70a5057be.jpg",
                special: true,
                sizes: ['6', '7', '8', '9', '10', '11']
            },
            {
                id: 658,
                name: "Men's Cross Training Shoes",
                description: "Versatile cross trainers for gym and various activities",
                price: 2699,
                originalPrice: 4099,
                image: "https://www.supersports.co.th/cdn/shop/files/NI083SH237DWTH-0.jpg?v=1739352726",
                special: false,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 659,
                name: "Men's Slip-On Sneakers",
                description: "Convenient slip-on design with elastic side panels",
                price: 1999,
                originalPrice: 3099,
                image: "https://m.media-amazon.com/images/I/514ZXut-8VL._UY1000_.jpg",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 660,
                name: "Men's High-Top Sneakers",
                description: "Fashionable high-top sneakers with padded collar",
                price: 2899,
                originalPrice: 4399,
                image: "https://5.imimg.com/data5/ECOM/Default/2024/6/424690892/KY/TS/OH/146821774/brand-men-leather-high-top-skateboarding-shoes-men-s-sneakers-male-fashion-non-slip-sport-shoes-f46df767-bb82-4e4b-9d0f-127a9b8814b5.webp",
                special: false,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 661,
                name: "Men's Walking Shoes",
                description: "Comfortable walking shoes with arch support",
                price: 2399,
                originalPrice: 3699,
                image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/r/s/p/8-brd-648-8-birde-navy-original-imah8hatrgkxkqg3.jpeg?q=90&crop=false",
                special: true,
                sizes: ['6', '7', '8', '9', '10', '11']
            },
            {
                id: 662,
                name: "Men's Leather Sneakers",
                description: "Premium leather sneakers that dress up or down",
                price: 3299,
                originalPrice: 4999,
                image: "https://fellmonger.in/cdn/shop/files/FMAPR250129_1_2048x.jpg?v=1744368970",
                special: false,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 663,
                name: "Men's Breathable Mesh Sneakers",
                description: "Lightweight mesh sneakers with maximum ventilation",
                price: 2199,
                originalPrice: 3399,
                image: "https://m.media-amazon.com/images/I/813zBI6OABL._UY1000_.jpg",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 664,
                name: "Men's Platform Sneakers",
                description: "Trendy platform sneakers with elevated sole",
                price: 2799,
                originalPrice: 4299,
                image: "https://m.media-amazon.com/images/I/51lGjIwA54L._UY1000_.jpg",
                special: false,
                sizes: ['7', '8', '9', '10']
            },
            {
                id: 665,
                name: "Men's Waterproof Sneakers",
                description: "Waterproof sneakers for all-weather wear",
                price: 3099,
                originalPrice: 4699,
                image: "https://m.media-amazon.com/images/I/812ex4dPUeL._UY1000_.jpg",
                special: true,
                sizes: ['8', '9', '10', '11', '12']
            },
            {
                id: 666,
                name: "Men's Minimalist Sneakers",
                description: "Barefoot-style minimalist sneakers with wide toe box",
                price: 2599,
                originalPrice: 3999,
                image: "https://m.media-amazon.com/images/I/71GwA9NxKvL._UY1000_.jpg",
                special: false,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 667,
                name: "Men's Color Block Sneakers",
                description: "Bold color block design with contrasting panels",
                price: 2699,
                originalPrice: 4099,
                image: "https://media.landmarkshops.in/cdn-cgi/image/h=1200,w=1200,q=85,fit=cover/max-new/1000015337827-Multi-MULTI-1000015337827_01-2100.jpg",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 668,
                name: "Men's Court Sneakers",
                description: "Classic court style sneakers for casual wear",
                price: 2099,
                originalPrice: 3199,
                image: "https://i.pinimg.com/736x/35/ee/31/35ee31254d4acce708d74ffe5a9e2795.jpg",
                special: false,
                sizes: ['6', '7', '8', '9', '10', '11']
            },
            {
                id: 669,
                name: "Men's Orthopedic Sneakers",
                description: "Therapeutic sneakers with extra support and comfort",
                price: 3499,
                originalPrice: 5299,
                image: "https://m.media-amazon.com/images/I/71ZDgASQPqL._UY1000_.jpg",
                special: true,
                sizes: ['7', '8', '9', '10', '11', '12']
            },
            {
                id: 670,
                name: "Men's Limited Edition Sneakers",
                description: "Collector's edition sneakers with unique design",
                price: 6999,
                originalPrice: 10499,
                image: "https://images.meesho.com/images/products/432651935/wpg8v_512.webp?width=512",
                special: false,
                sizes: ['8', '9', '10', '11']
            }
                        
                    ],
                    formals: [
                       {
                id: 671,
                name: "Men's Oxford Shoes",
                description: "Classic oxford shoes with cap toe design for formal occasions",
                price: 2499,
                originalPrice: 3499,
                image: "https://m.media-amazon.com/images/I/71bK3s7-KoL._UY1000_.jpg",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 672,
                name: "Men's Derby Shoes",
                description: "Elegant derby shoes with open lacing system",
                price: 2299,
                originalPrice: 3299,
                image: "https://www.zoomshoes.in/cdn/shop/files/PG53BR_1.jpg?v=1688386572",
                special: false,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 673,
                name: "Men's Brogues",
                description: "Traditional brogue shoes with decorative perforations",
                price: 2699,
                originalPrice: 3899,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/29031558/2024/4/18/c8fc060a-ca29-4346-95fd-2fc4fe1e77a21713423110368MenLeatherFormalShoes1.jpg",
                special: true,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 674,
                name: "Men's Monk Strap Shoes",
                description: "Sophisticated monk strap shoes with buckle closure",
                price: 2899,
                originalPrice: 4199,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR6rY9Y0fhdvsSZEK_KWnfP_En98OTLxWZHQ&s",
                special: false,
                sizes: ['7', '8', '9', '10']
            },
            {
                id: 675,
                name: "Men's Leather Loafers",
                description: "Premium leather loafers with tassel detail",
                price: 2199,
                originalPrice: 3199,
                image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/26438380/2023/12/15/4f466d93-cc5f-4b9f-9983-a960d4ea11851702631345299HouseofPataudiMenBuckledFormalMonkShoes1.jpg",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 676,
                name: "Men's Dress Boots",
                description: "Formal dress boots with sleek silhouette",
                price: 3199,
                originalPrice: 4599,
                image: "https://www.frostfreak.com/media/com_ecommerce/product_images/83/50/bd/ff_15783358710_800.jpg",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 677,
                name: "Men's Patent Leather Shoes",
                description: "Shiny patent leather shoes for black-tie events",
                price: 2799,
                originalPrice: 3999,
                image: "https://thedapperman.in/cdn/shop/products/1_v2_ae80d14d-982a-40a4-aed7-9c754f36a584.jpg?v=1629100827",
                special: true,
                sizes: ['7', '8', '9', '10']
            },
            {
                id: 678,
                name: "Men's Wingtip Shoes",
                description: "Classic wingtip design with detailed broguing",
                price: 2599,
                originalPrice: 3799,
                image: "https://www.phabhu.com/cdn/shop/files/wingtipbrogueshoesformen1.jpg?v=1716033091&width=1445",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 679,
                name: "Men's Chelsea Boots",
                description: "Elastic side Chelsea boots for smart casual wear",
                price: 2999,
                originalPrice: 4399,
                image: "https://images.meesho.com/images/products/552465043/ymyfm_512.webp?width=512",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 680,
                name: "Men's Double Monk Strap",
                description: "Elegant double monk strap shoes with brass buckles",
                price: 3099,
                originalPrice: 4499,
                image: "https://admin.mochishoes.com/product/19-78/660/19-78LA23.jpg",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 681,
                name: "Men's Cap Toe Dress Shoes",
                description: "Professional cap toe shoes for business attire",
                price: 2399,
                originalPrice: 3499,
                image: "https://m.media-amazon.com/images/I/810WpZzsY7L._UY1000_.jpg",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 682,
                name: "Men's Saddle Shoes",
                description: "Vintage-inspired saddle shoes with contrasting panel",
                price: 2499,
                originalPrice: 3699,
                image: "https://www.albertotorresi.com/cdn/shop/products/88662Tan.jpg?v=1754295473&width=1100",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 683,
                name: "Men's Opera Pumps",
                description: "Formal opera pumps for white-tie events",
                price: 3299,
                originalPrice: 4799,
                image: "https://www.carminashoemaker.com/cdnassets/opera_pumps_black_patent_80445_l-3.webp",
                special: true,
                sizes: ['7', '8', '9', '10']
            },
            {
                id: 684,
                name: "Men's Wholecut Shoes",
                description: "Elegant wholecut design from single piece of leather",
                price: 3499,
                originalPrice: 4999,
                image: "https://rwproductimages.s3.ap-south-1.amazonaws.com/1035_pair.jpeg?v=60fc3342",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 685,
                name: "Men's Penny Loafers",
                description: "Classic penny loafers with slot for penny decoration",
                price: 2099,
                originalPrice: 3099,
                image: "https://thebratarmy.com/cdn/shop/products/MG_1545_800x.jpg?v=1712404720",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 686,
                name: "Men's Chukka Boots",
                description: "Versatile chukka boots for smart casual occasions",
                price: 2699,
                originalPrice: 3899,
                image: "https://www.zoomshoes.in/cdn/shop/products/14_2_1.jpg?v=1621056647",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 687,
                name: "Men's Two-Tone Shoes",
                description: "Fashionable two-tone leather combination",
                price: 2799,
                originalPrice: 4099,
                image: "https://m.media-amazon.com/images/I/51uXaClI2SL._UY900_.jpg",
                special: true,
                sizes: ['7', '8', '9', '10']
            },
            {
                id: 688,
                name: "Men's Dress Moccasins",
                description: "Comfortable dress moccasins with refined look",
                price: 1999,
                originalPrice: 2999,
                image: "https://assets.ajio.com/medias/sys_master/root/20230801/3xXp/64c8f3e6eebac147fc9a80c4/-473Wx593H-466381493-tan-MODEL6.jpg",
                special: false,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 689,
                name: "Men's Formal Slip-Ons",
                description: "Convenient slip-on formal shoes with elastic gore",
                price: 2299,
                originalPrice: 3399,
                image: "https://egoss.in/cdn/shop/files/Untitleddesign_31.png?v=1753878441&width=1080",
                special: true,
                sizes: ['7', '8', '9', '10']
            },
            {
                id: 690,
                name: "Men's Luxury Dress Shoes",
                description: "Premium luxury dress shoes with handcrafted details",
                price: 4599,
                originalPrice: 6599,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/30117480/2024/7/4/797cc4a9-ef23-44dc-8801-16ed1d978ed21720090782832MochiMenLeatherFormalDerbys1.jpg",
                special: false,
                sizes: ['8', '9', '10', '11']
            }
                    ],
                    casuals: [
                         {
                id: 691,
                name: "Men's Loafers",
                description: "Comfortable leather loafers for casual everyday wear",
                price: 1799,
                originalPrice: 2599,
                image: "https://assets.levelshoes.com/cdn-cgi/image/width=720,height=1008,quality=85,format=webp/media/catalog/product/1/3/13094-marron_3.jpg?ts=20231104031611",
                special: false,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 692,
                name: "Men's Canvas Sneakers",
                description: "Lightweight canvas sneakers with rubber sole",
                price: 1299,
                originalPrice: 1999,
                image: "https://cdn-images.farfetch-contents.com/19/46/47/15/19464715_43451297_600.jpg",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 693,
                name: "Men's Boat Shoes",
                description: "Classic boat shoes with non-marking rubber sole",
                price: 1599,
                originalPrice: 2399,
                image: "https://fausto.in/cdn/shop/products/FST_3841_BROWN_1-1_MOOD_400x.jpg?v=1743177440",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 694,
                name: "Men's Espadrilles",
                description: "Summer espadrilles with jute rope sole",
                price: 999,
                originalPrice: 1499,
                image: "https://assets.ajio.com/medias/sys_master/root/20241209/X2FO/6756d1260f47f80c87e7b17f/-473Wx593H-466537001-white-MODEL.jpg",
                special: true,
                sizes: ['7', '8', '9', '10']
            },
            {
                id: 695,
                name: "Men's Moccasins",
                description: "Soft leather moccasins with hand-stitched details",
                price: 1699,
                originalPrice: 2499,
                image: "https://fausto.in/cdn/shop/products/FST_FOBMC-1021_TAN_1-1_MOOD_400x.jpg?v=1679578353",
                special: false,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 696,
                name: "Men's Slip-On Sneakers",
                description: "Easy slip-on sneakers with elastic side panels",
                price: 1399,
                originalPrice: 2099,
                image: "https://m.media-amazon.com/images/I/71JjpmERc+L._UY1000_.jpg",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 697,
                name: "Men's Desert Boots",
                description: "Classic desert boots with crepe rubber sole",
                price: 1999,
                originalPrice: 2999,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/23178210/2024/9/26/38874b90-ce78-4f96-8e93-6ffd3738497a1727354097583-LOUIS-STITCH-Men-Mid-Top-Solid-Suede-Desert-Boots-7071727354-1.jpg",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 698,
                name: "Men's Driving Shoes",
                description: "Comfortable driving shoes with rubber nubs on sole",
                price: 1499,
                originalPrice: 2299,
                image: "https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/s/f/l/6-leefox-driving-loafer-shoe-40-g-l-trend-brown-original-imags38fn3rtywa5.jpeg?q=90&crop=false",
                special: true,
                sizes: ['7', '8', '9', '10']
            },
            {
                id: 699,
                name: "Men's Casual Sandals",
                description: "Comfortable leather sandals for warm weather",
                price: 1199,
                originalPrice: 1799,
                image: "https://m.media-amazon.com/images/I/71usVAebAuL._UY1000_.jpg",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 700,
                name: "Men's Chukka Boots",
                description: "Versatile chukka boots for smart casual outfits",
                price: 1899,
                originalPrice: 2799,
                image: "https://www.zoomshoes.in/cdn/shop/products/14_1_a077ecb4-5d17-4db7-b58e-6f0e58525696.jpg?v=1621056647",
                special: true,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 701,
                name: "Men's Canvas Slip-Ons",
                description: "Casual canvas slip-ons with vulcanized rubber sole",
                price: 1099,
                originalPrice: 1699,
                image: "https://fausto.in/cdn/shop/files/FST_KI-926_GREY-MOOD-SHOT_400x.jpg?v=1706522372",
                special: false,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 702,
                name: "Men's Casual Oxfords",
                description: "Dressier casual oxfords with comfortable fit",
                price: 1699,
                originalPrice: 2499,
                image: "https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/x/f/x/-original-imags4f6z7hqzmsn.jpeg?q=90&crop=false",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 703,
                name: "Men's Hiking Shoes",
                description: "Casual hiking shoes with trail-ready grip",
                price: 2199,
                originalPrice: 3299,
                image: "https://image.made-in-china.com/2f0j00LNGlIQgcvvrp/Light-Weight-Walking-Style-Casual-Shoes-Trekking-Shoes-Non-Slip-Waterproof-Hiking-Shoes-Men-Outdoor.webp",
                special: false,
                sizes: ['8', '9', '10', '11', '12']
            },
            {
                id: 704,
                name: "Men's Suede Shoes",
                description: "Soft suede casual shoes with rubber sole",
                price: 1799,
                originalPrice: 2699,
                image: "https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/y/b/4/8-hirel1630-8-hirel-s-tan-original-imahfjy45bhxpf3d.jpeg?q=90&crop=false",
                special: true,
                sizes: ['7', '8', '9', '10']
            },
            {
                id: 705,
                name: "Men's Casual Boots",
                description: "Stylish casual boots for everyday wear",
                price: 2399,
                originalPrice: 3599,
                image: "https://images.meesho.com/images/products/474033700/nwmmr_512.webp?width=512",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 706,
                name: "Men's Plimsolls",
                description: "Classic plimsolls with rubber toe cap",
                price: 999,
                originalPrice: 1499,
                image: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010495684_437Wx649H_202109031630551.jpeg",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 707,
                name: "Men's Casual Monk Straps",
                description: "Casual monk strap shoes with comfortable fit",
                price: 1999,
                originalPrice: 2999,
                image: "https://m.media-amazon.com/images/I/716cEjQhNjL._UY1000_.jpg",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 708,
                name: "Men's Slip-Resistant Shoes",
                description: "Casual shoes with slip-resistant outsole",
                price: 1599,
                originalPrice: 2399,
                image: "https://hips.hearstapps.com/hmg-prod/images/slip-on-shoes-66f7061b40d22.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 709,
                name: "Men's Casual Derbies",
                description: "Comfortable derby shoes for casual occasions",
                price: 1749,
                originalPrice: 2599,
                image: "https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/t/y/c/7-suedederby-7-hirel-s-brown-original-imahyjm74ujqqk8q.jpeg?q=90&crop=false",
                special: false,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 710,
                name: "Men's Memory Foam Casual Shoes",
                description: "Ultra-comfortable shoes with memory foam insoles",
                price: 1899,
                originalPrice: 2799,
                image: "https://redtape.com/cdn/shop/files/RSL0737A_1.jpg?v=1756808935",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            }
                    ],
                    sports: [
                       {
                id: 711,
                name: "Men's Sports Shoes",
                description: "High-performance sports shoes with extra grip and cushioning",
                price: 2799,
                originalPrice: 3999,
                image: "https://images.meesho.com/images/products/233816974/hmo5k_512.webp?width=512",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 712,
                name: "Men's Basketball Shoes",
                description: "High-top basketball shoes with ankle support and court grip",
                price: 3499,
                originalPrice: 4999,
                image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/67e833ca-6895-4e77-8c9a-4a0e3ce9f3bc/GIANNIS+IMMORTALITY+4+EP.png",
                special: false,
                sizes: ['8', '9', '10', '11', '12']
            },
            {
                id: 713,
                name: "Men's Running Shoes",
                description: "Lightweight running shoes with breathable mesh and cushioning",
                price: 2999,
                originalPrice: 4299,
                image: "https://img.tatacliq.com/images/i25//437Wx649H/MP000000025622490_437Wx649H_202507200845171.jpeg",
                special: true,
                sizes: ['7', '8', '9', '10', '11', '12']
            },
            {
                id: 714,
                name: "Men's Cross Training Shoes",
                description: "Versatile cross trainers for gym and various sports activities",
                price: 2699,
                originalPrice: 3899,
                image: "https://g.sdlcdn.com/imgs/k/x/q/Impakto-Blue-Training-Shoes-SDL293710505-1-8969f.jpg?w=850&h=995&sharp=7",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 715,
                name: "Men's Trail Running Shoes",
                description: "Water-resistant trail runners with aggressive tread pattern",
                price: 3199,
                originalPrice: 4599,
                image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/88647ece-9b25-4353-8d0c-3e340986cdb4/NIKE+PEGASUS+TRAIL+5+GTX.png",
                special: true,
                sizes: ['8', '9', '10', '11', '12']
            },
            {
                id: 716,
                name: "Men's Soccer Cleats",
                description: "Professional soccer cleats with studs for firm ground",
                price: 3799,
                originalPrice: 5499,
                image: "https://m.media-amazon.com/images/I/710jW1DhnPL._UY1000_.jpg",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 717,
                name: "Men's Tennis Shoes",
                description: "Court shoes with lateral support for quick movements",
                price: 2899,
                originalPrice: 4199,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/22862176/2023/4/24/99fcf562-bc54-4c4e-8ffe-67b41828f3491682340047696SportsShoes1.jpg",
                special: true,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 718,
                name: "Men's Hiking Shoes",
                description: "Durable hiking shoes with waterproof membrane and grip",
                price: 3299,
                originalPrice: 4799,
                image: "https://wildcraft.com/media/catalog/product/1/_/1_2413_2.jpg",
                special: false,
                sizes: ['8', '9', '10', '11', '12']
            },
            {
                id: 719,
                name: "Men's Golf Shoes",
                description: "Spikeless golf shoes with excellent traction and comfort",
                price: 3599,
                originalPrice: 5199,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/32876165/2025/6/24/aab4c461-0b95-47de-9a53-e4c9bc37517a1750766301895-PRO-ASE-Men-Leather-Golf-Shoes-9251750766301403-1.jpg",
                special: true,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 720,
                name: "Men's Weightlifting Shoes",
                description: "Stable weightlifting shoes with raised heel and firm sole",
                price: 3099,
                originalPrice: 4499,
                image: "https://www.bullrockfitness.com/wp-content/uploads/2023/11/weightlifting-shoes_podium_red_color_for_men_women_weight_training_shoes.jpg",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 721,
                name: "Men's Track Spikes",
                description: "Lightweight track spikes for competitive running",
                price: 2999,
                originalPrice: 4299,
                image: "https://m.media-amazon.com/images/I/8108-gibIUL._UF894,1000_QL80_.jpg",
                special: true,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 722,
                name: "Men's Volleyball Shoes",
                description: "Volleyball shoes with gum rubber sole and cushioning",
                price: 2799,
                originalPrice: 3999,
                image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/27136970/2024/1/25/b16ded74-d3b4-4d77-b6d8-25dbb7a8e0fe1706187754160ASICSNetburnerBallisticFF3MenPatternedLace-UpVolleyballSport1.jpg",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 723,
                name: "Men's Baseball Cleats",
                description: "Metal cleats for baseball with ankle support",
                price: 3399,
                originalPrice: 4899,
                image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/350ab9f8-bbaa-49dc-873d-69c925466c5e/ALPHA+HUARACHE+4+KYSTN.png",
                special: true,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 724,
                name: "Men's Badminton Shoes",
                description: "Lightweight badminton shoes with non-marking sole",
                price: 2599,
                originalPrice: 3799,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/29672680/2024/5/23/5e56f058-09d9-4e61-bb94-ec2eb02a318f1716424255612NIVIAMenMeshBadmintonNon-MarkingShoes1.jpg",
                special: false,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 725,
                name: "Men's Cricket Shoes",
                description: "Spiked cricket shoes with excellent grip on pitch",
                price: 3199,
                originalPrice: 4599,
                image: "https://m.media-amazon.com/images/I/71yONwGxRiL._UF894,1000_QL80_.jpg",
                special: true,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 726,
                name: "Men's Boxing Shoes",
                description: "High-top boxing shoes with ankle support and grip",
                price: 2899,
                originalPrice: 4199,
                image: "https://m.media-amazon.com/images/I/613bzfWm5pL.jpg",
                special: false,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 727,
                name: "Men's Rugby Boots",
                description: "Durable rugby boots with studs for grass fields",
                price: 3499,
                originalPrice: 4999,
                image: "https://m.media-amazon.com/images/I/71-zJ4e41tL._UY1000_.jpg",
                special: true,
                sizes: ['8', '9', '10', '11', '12']
            },
            {
                id: 728,
                name: "Men's Indoor Court Shoes",
                description: "Indoor sports shoes with non-marking rubber sole",
                price: 2499,
                originalPrice: 3599,
                image: "https://assets.ajio.com/medias/sys_master/root/20231012/tqZb/6527add9ddf7791519362618/-473Wx593H-466460366-white-MODEL.jpg",
                special: false,
                sizes: ['7', '8', '9', '10', '11']
            },
            {
                id: 729,
                name: "Men's Water Sports Shoes",
                description: "Quick-dry water shoes for aquatic activities",
                price: 1999,
                originalPrice: 2999,
                image: "https://m.media-amazon.com/images/I/61PLjxO3ZzL._UF894,1000_QL80_.jpg",
                special: true,
                sizes: ['8', '9', '10', '11']
            },
            {
                id: 730,
                name: "Men's Multi-Sport Shoes",
                description: "Versatile shoes for various sports activities",
                price: 2699,
                originalPrice: 3899,
                image: "https://img0.junaroad.com/uiproducts/21170361/zoom_0-1716491946.jpg",
                special: false,
                sizes: ['7', '8', '9', '10', '11']
            }
                    ]
                },
                womenShoes: {
                    heels: [
                         {
                id: 731,
                name: "Women's High Heels",
                description: "Elegant high heels with stiletto heel for special occasions",
                price: 1999,
                originalPrice: 2999,
                image: "https://admin.mochishoes.com/product/34-193/660/34-193LA52.jpg",
                special: true,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 732,
                name: "Women's Block Heels",
                description: "Comfortable block heels with stable wide heel",
                price: 1799,
                originalPrice: 2699,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/30217065/2024/7/18/209c099a-a809-4a8d-a857-ca907f1485531721297371390-The-Roadster-Lifestyle-Co-Women-Pointed-Toe-Block-Heels-2172-7.jpg",
                special: false,
                sizes: ['5', '6', '7', '8', '9']
            },
            {
                id: 733,
                name: "Women's Wedge Heels",
                description: "Stylish wedge heels with platform sole",
                price: 1899,
                originalPrice: 2799,
                image: "https://www.tresmode.com/cdn/shop/files/the-amst-beige-women-s-dress-wedge-sandals-tresmode-tresmode-1.jpg?v=1755688881",
                special: true,
                sizes: ['6', '7', '8', '9']
            },
            {
                id: 734,
                name: "Women's Kitten Heels",
                description: "Delicate kitten heels with pointed toe",
                price: 1599,
                originalPrice: 2399,
                image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/0/4010444EL-JS-W-27CREAM_1.jpg?tr=w-512",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 735,
                name: "Women's Platform Heels",
                description: "Trendy platform heels with elevated sole",
                price: 2199,
                originalPrice: 3299,
                image: "https://images-static.nykaa.com/media/catalog/product/2/8/282ba1aNK_SHOET00012160_1.jpg?tr=w-500",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 736,
                name: "Women's Ankle Strap Heels",
                description: "Elegant heels with secure ankle strap",
                price: 2099,
                originalPrice: 3149,
                image: "https://images-static.nykaa.com/media/catalog/product/e/d/edf230bICN-AF-Wn-13PEACH_1.jpg?tr=w-500",
                special: false,
                sizes: ['5', '6', '7', '8', '9']
            },
            {
                id: 737,
                name: "Women's Pump Heels",
                description: "Classic pump heels with closed toe",
                price: 1699,
                originalPrice: 2549,
                image: "https://www.theroyalepeacock.com/cdn/shop/products/The-Royale-Peacock-Black-Suede-Leather-Pump-Heels-for-Women-2.jpg?v=1644427107",
                special: true,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 738,
                name: "Women's Slingback Heels",
                description: "Sophisticated slingback heels with open back",
                price: 1899,
                originalPrice: 2849,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/35073617/2025/6/25/b1f38939-085d-4c60-b7eb-7a3e4628aca71750859942376-TRYME-Women-Square-Toe-Block-Heel-Sandals-7271750859941871-1.jpg",
                special: false,
                sizes: ['6', '7', '8']
            },
            {
                id: 739,
                name: "Women's Peep Toe Heels",
                description: "Fashionable peep toe heels with open toe",
                price: 1799,
                originalPrice: 2699,
                image: "https://admin.mochishoes.com/product/31-703/660/31-703-23-36-1.JPG",
                special: true,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 740,
                name: "Women's Mule Heels",
                description: "Backless mule heels with chic design",
                price: 1599,
                originalPrice: 2399,
                image: "https://www.tresmode.com/cdn/shop/files/the-massle-white-women-s-dress-tassel-mules-tresmode-tresmode-1.jpg?v=1755689274",
                special: false,
                sizes: ['6', '7', '8', '9']
            },
            {
                id: 741,
                name: "Women's Espadrille Wedges",
                description: "Summer espadrille wedges with jute detail",
                price: 1499,
                originalPrice: 2249,
                image: "https://xtistore.com/cdn/shop/files/13035403_38.jpg?v=1750085691&width=1100",
                special: true,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 742,
                name: "Women's Court Heels",
                description: "Professional court heels for office wear",
                price: 1699,
                originalPrice: 2549,
                image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N29159s.jpg?im=Resize,width=750",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 743,
                name: "Women's Strappy Heels",
                description: "Multiple strap heels with delicate design",
                price: 1999,
                originalPrice: 2999,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/34495083/2025/5/29/6922e8ed-bbbe-4113-9e6c-efcacf40179f1748526562909-DressBerry-Party-Block-Sandals-3461748526562511-1.jpg",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 744,
                name: "Women's Chunky Heels",
                description: "Comfortable chunky heels with retro vibe",
                price: 1799,
                originalPrice: 2699,
                image: "https://images.meesho.com/images/products/368435633/2qz8l_512.webp?width=512",
                special: false,
                sizes: ['5', '6', '7', '8', '9']
            },
            {
                id: 745,
                name: "Women's Bootie Heels",
                description: "Ankle bootie heels for edgy style",
                price: 2299,
                originalPrice: 3449,
                image: "https://image.made-in-china.com/2f0j00evMhUHBsLrqZ/Lace-up-Heel-Booties-Ladies-Women-Ankle-Boots-Heels-Boots-Shoes-Women-Booties.webp",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 746,
                name: "Women's Metallic Heels",
                description: "Shiny metallic heels for party wear",
                price: 1899,
                originalPrice: 2849,
                image: "https://cdn.shopify.com/s/files/1/0070/8853/7651/files/07401-000249_1.jpg?v=1753389000&width=886&height=1000",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 747,
                name: "Women's Crystal Heels",
                description: "Luxury crystal embellished heels",
                price: 2799,
                originalPrice: 4199,
                image: "https://images.meesho.com/images/products/388952302/qo1b1_512.webp?width=512",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 748,
                name: "Women's Mary Jane Heels",
                description: "Classic Mary Jane style with strap",
                price: 1699,
                originalPrice: 2549,
                image: "https://m.media-amazon.com/images/I/61T+rZxbebL._UY1000_.jpg",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 749,
                name: "Women's Cone Heels",
                description: "Fashionable cone-shaped heels",
                price: 1999,
                originalPrice: 2999,
                image: "https://images.meesho.com/images/products/363127953/wxaou_512.webp",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 750,
                name: "Women's Low Heels",
                description: "Comfortable low heels for all-day wear",
                price: 1499,
                originalPrice: 2249,
                image: "https://imagescdn.vanheusenindia.com/img/app/product/3/39681076-13864725.jpg?auto=format&w=390",
                special: false,
                sizes: ['5', '6', '7', '8', '9']
            }
                    ],
                    flats: [
                        {
                id: 751,
                name: "Women's Ballet Flats",
                description: "Comfortable ballet flats with soft leather for everyday wear",
                price: 1299,
                originalPrice: 1899,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/35675871/2025/7/22/e8ba5f0f-cf04-42ca-9ca2-a52cd7d3861c1753173827095-DressBerry-Women-Slip-On-Ballerinas-Flat-8521753173826701-1.jpg",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 752,
                name: "Women's Loafers",
                description: "Classic loafers with horsebit detail and comfortable fit",
                price: 1499,
                originalPrice: 2199,
                image: "https://www.tresmode.com/cdn/shop/files/the-sigor-beige-women-s-dress-loafers-tresmode-tresmode-1.jpg?v=1755689156",
                special: true,
                sizes: ['5', '6', '7', '8', '9']
            },
            {
                id: 753,
                name: "Women's Pointed Toe Flats",
                description: "Elegant pointed toe flats for a sophisticated look",
                price: 1399,
                originalPrice: 2099,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/33070192/2025/5/16/aa3303fa-1c8c-4f08-be12-674c5148d9ce1747378469470-Lino-Perros-Women-Fashion-Flats-4181747378469422-15.jpg",
                special: false,
                sizes: ['6', '7', '8']
            },
            {
                id: 754,
                name: "Women's Moccasins",
                description: "Soft moccasins with hand-stitched details and memory foam",
                price: 1199,
                originalPrice: 1799,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/MARCH/11/525QS7w3_a332c8e4b23e4c3d8db4ca214ebf1c9a.jpg",
                special: true,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 755,
                name: "Women's Espadrilles",
                description: "Casual espadrilles with jute sole and canvas upper",
                price: 999,
                originalPrice: 1499,
                image: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/SearchINT/Lge/Q73796.jpg?im=Resize,width=450",
                special: false,
                sizes: ['5', '6', '7', '8', '9']
            },
            {
                id: 756,
                name: "Women's Driving Flats",
                description: "Comfortable driving flats with rubber grip soles",
                price: 1099,
                originalPrice: 1699,
                image: "https://m.media-amazon.com/images/I/71Fcyoi9DcL._UY1000_.jpg",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 757,
                name: "Women's Mary Jane Flats",
                description: "Classic Mary Jane style with adjustable strap",
                price: 1349,
                originalPrice: 1999,
                image: "https://m.media-amazon.com/images/I/61W1OiShdbL._UY1000_.jpg",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 758,
                name: "Women's Slip-On Sneakers",
                description: "Casual slip-on sneakers with elastic gore",
                price: 1249,
                originalPrice: 1899,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/17598214/2022/4/26/8a25dd1e-85f5-4fb2-80e8-0ccd53e6e5491650949134325-Marc-Loire-Women-Grey-Melange-Woven-Design-Slip-On-Sneakers--11.jpg",
                special: true,
                sizes: ['5', '6', '7', '8', '9']
            },
            {
                id: 759,
                name: "Women's Oxford Flats",
                description: "Smart oxford flats with lace-up design",
                price: 1599,
                originalPrice: 2399,
                image: "https://i.etsystatic.com/8550606/r/il/924ee9/2045280370/il_570xN.2045280370_1xtw.jpg",
                special: false,
                sizes: ['6', '7', '8']
            },
            {
                id: 760,
                name: "Women's Round Toe Flats",
                description: "Comfortable round toe flats with cushioned insole",
                price: 1149,
                originalPrice: 1749,
                image: "https://assets.ajio.com/medias/sys_master/root/20230903/klhs/64f3b431afa4cf41f59f4acf/-473Wx593H-466458594-nude-MODEL.jpg",
                special: true,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 761,
                name: "Women's Bow Flats",
                description: "Feminine flats with decorative bow detail",
                price: 1399,
                originalPrice: 2099,
                image: "https://m.media-amazon.com/images/I/41HRxnt022L._UY1000_.jpg",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 762,
                name: "Women's Metallic Flats",
                description: "Shiny metallic flats for a touch of glamour",
                price: 1299,
                originalPrice: 1949,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/JUNE/3/xLLdrdLi_3a0e1417fca94bf691fb4f3a83dde7ed.jpg",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 763,
                name: "Women's Loafer Mules",
                description: "Backless loafer mules for easy slip-on style",
                price: 1449,
                originalPrice: 2199,
                image: "https://shoebank.in/cdn/shop/files/ava-loafer-mules-500035.jpg?v=1746543572&width=500",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 764,
                name: "Women's Embroidered Flats",
                description: "Beautiful flats with intricate embroidery details",
                price: 1699,
                originalPrice: 2499,
                image: "https://m.media-amazon.com/images/I/51MaMgfBM0L.jpg",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 765,
                name: "Women's Vegan Leather Flats",
                description: "Eco-friendly vegan leather flats with comfortable fit",
                price: 1199,
                originalPrice: 1799,
                image: "https://shopgnist.com/cdn/shop/files/GN-F-591-Tan_1_1080x1080.jpg?v=1718044088",
                special: false,
                sizes: ['5', '6', '7', '8', '9']
            },
            {
                id: 766,
                name: "Women's Slingback Flats",
                description: "Elegant slingback flats with open back design",
                price: 1399,
                originalPrice: 2099,
                image: "https://assets.ajio.com/medias/sys_master/root/20240417/Ajw3/661ff79d05ac7d77bb14429a/-473Wx593H-467259091-brown-MODEL.jpg",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 767,
                name: "Women's Platform Flats",
                description: "Trendy platform flats with slight elevation",
                price: 1549,
                originalPrice: 2299,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/34485376/2025/5/29/607dc94c-19df-4202-9679-6bde089f3c331748526447100-The-Roadster-Lifestyle-Co-Women-Platform-Heel-Sandal-3681748-1.jpg",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 768,
                name: "Women's Tassel Loafers",
                description: "Classic loafers with decorative tassel detail",
                price: 1499,
                originalPrice: 2249,
                image: "https://italeau.com/cdn/shop/products/italeau_lea-loafer-suede_bone-1_600x.jpg?v=1751659588",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 769,
                name: "Women's Memory Foam Flats",
                description: "Ultra-comfortable flats with memory foam technology",
                price: 1649,
                originalPrice: 2449,
                image: "https://m.media-amazon.com/images/I/71du9V4sQhL._AC_UY900_.jpg",
                special: false,
                sizes: ['5', '6', '7', '8', '9']
            },
            {
                id: 770,
                name: "Women's Patent Leather Flats",
                description: "Shiny patent leather flats for a polished look",
                price: 1399,
                originalPrice: 2099,
                image: "https://m.media-amazon.com/images/I/61l8ik-gCQL._UY1000_.jpg",
                special: true,
                sizes: ['5', '6', '7', '8']
            }
                    ],
                    sandals: [
                         {
                id: 771,
                name: "Women's Summer Sandals",
                description: "Stylish sandals with comfortable footbed for summer season",
                price: 999,
                originalPrice: 1499,
                image: "https://5.imimg.com/data5/ECOM/Default/2023/8/333181362/ZH/PM/NB/19034405/946a3281-65ce-43df-8ae7-0a561154d6df-500x500.jpg",
                special: true,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 772,
                name: "Women's Flip Flops",
                description: "Casual flip flops with soft rubber sole",
                price: 499,
                originalPrice: 799,
                image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/MAY/16/CnsuEDyu_b15c414599064daaab0af21c4882b58c.jpg",
                special: false,
                sizes: ['5', '6', '7', '8', '9']
            },
            {
                id: 773,
                name: "Women's Wedge Sandals",
                description: "Comfortable wedge sandals with ankle strap",
                price: 1499,
                originalPrice: 2199,
                image: "https://www.tresmode.com/cdn/shop/files/the-amst-beige-women-s-dress-wedge-sandals-tresmode-tresmode-1.jpg?v=1755688881",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 774,
                name: "Women's Gladiator Sandals",
                description: "Trendy gladiator sandals with multiple straps",
                price: 1299,
                originalPrice: 1949,
                image: "https://admin.mochishoes.com/product/33-881/660/33-881LA20.jpg",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 775,
                name: "Women's Platform Sandals",
                description: "Fashionable platform sandals with elevated sole",
                price: 1699,
                originalPrice: 2499,
                image: "https://inc5shop.com/cdn/shop/files/101605DARKBEIGE.jpg?v=1751452280&width=533",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 776,
                name: "Women's Slide Sandals",
                description: "Easy slide sandals with comfortable footbed",
                price: 899,
                originalPrice: 1349,
                image: "https://m.media-amazon.com/images/I/51qLKpMS2bL._UY1100_.jpg",
                special: false,
                sizes: ['5', '6', '7', '8', '9']
            },
            {
                id: 777,
                name: "Women's Heeled Sandals",
                description: "Elegant heeled sandals for evening wear",
                price: 1799,
                originalPrice: 2699,
                image: "https://media.landmarkshops.in/cdn-cgi/image/h=550,w=550,q=85,fit=cover/lifestyle/1000015588076-Brown-Khaki-1000015588076_01-2100.jpg",
                special: true,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 778,
                name: "Women's Sport Sandals",
                description: "Durable sport sandals with adjustable straps",
                price: 1199,
                originalPrice: 1799,
                image: "https://stylestryproductionwls47sou4z.cdn.e2enetworks.net/images/products/medium/79c14d2e82750f216a29da1ac1e08cb55aa4a247.webp",
                special: false,
                sizes: ['6', '7', '8', '9']
            },
            {
                id: 779,
                name: "Women's Birkenstock-style Sandals",
                description: "Comfort sandals with contoured footbed",
                price: 1899,
                originalPrice: 2799,
                image: "https://media.karousell.com/media/photos/products/2023/6/12/birkenstock_arizona_triple_whi_1686589715_f1d2cc49.jpg",
                special: true,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 780,
                name: "Women's T-strap Sandals",
                description: "Classic T-strap design with secure fit",
                price: 1399,
                originalPrice: 2099,
                image: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000020493459_437Wx649H_202403222059321.jpeg",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 781,
                name: "Women's Embellished Sandals",
                description: "Decorative sandals with bead and crystal details",
                price: 1599,
                originalPrice: 2399,
                image: "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dweb470996/images/large/5615165_8.jpeg?sw=620%20620w",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 782,
                name: "Women's Fisherman Sandals",
                description: "Comfortable fisherman style with closed toe",
                price: 1299,
                originalPrice: 1949,
                image: "https://m.media-amazon.com/images/I/61UenTJWVkL._UY1000_.jpg",
                special: false,
                sizes: ['5', '6', '7', '8', '9']
            },
            {
                id: 783,
                name: "Women's Cork Wedge Sandals",
                description: "Lightweight cork wedge sandals for summer",
                price: 1499,
                originalPrice: 2249,
                image: "https://m.media-amazon.com/images/I/61Ah73NchpL._UY1000_.jpg",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 784,
                name: "Women's Minimalist Sandals",
                description: "Simple minimalist sandals with thin straps",
                price: 1099,
                originalPrice: 1649,
                image: "https://barefootshoeguide.com/wp-content/uploads/2024/05/Laboo_Leather_Barefoot_Sandals_on_Etsy-08220_SQ-1024x1024.jpg",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 785,
                name: "Women's Block Heel Sandals",
                description: "Comfortable block heel sandals with ankle support",
                price: 1699,
                originalPrice: 2549,
                image: "https://www.tresmode.com/cdn/shop/files/the-stripblock-pink-women-s-dress-block-heel-sandals-tresmode-tresmode-1.jpg?v=1755689617",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 786,
                name: "Women's Jelly Sandals",
                description: "Fun jelly sandals with transparent design",
                price: 699,
                originalPrice: 1099,
                image: "https://cdn-images.farfetch-contents.com/23/00/08/93/23000893_53095393_600.jpg",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 787,
                name: "Women's Boho Sandals",
                description: "Bohemian style sandals with fringe details",
                price: 1399,
                originalPrice: 2099,
                image: "https://bohobeachhut.com/cdn/shop/products/boho-beach-hut-women-s-sandals-black-sandals-gray-sandals-boho-sandals-boho-cross-tied-sandals-gray-5-29271528734915_grande.jpg?v=1724227434",
                special: true,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 788,
                name: "Women's Orthopedic Sandals",
                description: "Therapeutic sandals with arch support",
                price: 1999,
                originalPrice: 2999,
                image: "https://m.media-amazon.com/images/I/71zSjSBYTAL._UY1000_.jpg",
                special: false,
                sizes: ['6', '7', '8', '9']
            },
            {
                id: 789,
                name: "Women's Dressy Sandals",
                description: "Elegant dressy sandals for special occasions",
                price: 1899,
                originalPrice: 2799,
                image: "https://m.media-amazon.com/images/I/81yK6DljOyL._UY1000_.jpg",
                special: true,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 790,
                name: "Women's Athletic Sandals",
                description: "Water-friendly athletic sandals for outdoor activities",
                price: 1499,
                originalPrice: 2249,
                image: "https://redtape.com/cdn/shop/files/RLF0099_1..jpg?v=1756808407",
                special: false,
                sizes: ['6', '7', '8', '9']
            }
                    ],
                    sneakers: [
                         {
                id: 791,
                name: "Women's Fashion Sneakers",
                description: "Trendy sneakers with stylish design for casual outings",
                price: 1899,
                originalPrice: 2799,
                image: "https://image.made-in-china.com/202f0j00ZHGkbFPzkyoN/Latest-Designs-Women-prime-S-Fashion-Sneaker-Shoes-Breathable-Running-Shoes.webp",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 792,
                name: "Women's Running Shoes",
                description: "Lightweight running shoes with cushion technology",
                price: 2499,
                originalPrice: 3699,
                image: "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw6c0f5cc8/images/large/196311233128-1.jpg",
                special: true,
                sizes: ['6', '7', '8', '9']
            },
            {
                id: 793,
                name: "Women's Platform Sneakers",
                description: "Fashionable platform sneakers with elevated sole",
                price: 2199,
                originalPrice: 3299,
                image: "https://stylestryproductionwls47sou4z.cdn.e2enetworks.net/images/products/medium/512b6d17fc0254a947f9c0b1102d43cd957f93b3.webp",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 794,
                name: "Women's Slip-On Sneakers",
                description: "Convenient slip-on sneakers with elastic sides",
                price: 1599,
                originalPrice: 2399,
                image: "https://s7.landsend.com/is/image/LandsEnd/548487_LEPP_L1_634?$xl$&wid=1003&hei=1003",
                special: true,
                sizes: ['5', '6', '7', '8', '9']
            },
            {
                id: 795,
                name: "Women's Leather Sneakers",
                description: "Premium leather sneakers for smart casual look",
                price: 2799,
                originalPrice: 4199,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcd9hu5UZMwCQ9-yqMOOjgO0WEsgViCTC2Q&s",
                special: false,
                sizes: ['6', '7', '8']
            },
            {
                id: 796,
                name: "Women's Canvas Sneakers",
                description: "Classic canvas sneakers with rubber toe cap",
                price: 1299,
                originalPrice: 1949,
                image: "https://image.made-in-china.com/202f0j00aJhlpFCIfygk/New-Sports-Leisure-Canvas-Shoes-Female-Commuter-Fashion-Running-Shoes.webp",
                special: true,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 797,
                name: "Women's High-Top Sneakers",
                description: "Stylish high-top sneakers with ankle support",
                price: 2099,
                originalPrice: 3149,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnudxhX6TXkCG89QmvEEgbIhZ-GfUt1LWuErQwCrfAQpBcQj0YJpu48K4kt5Fbc1ZJvU&usqp=CAU",
                special: false,
                sizes: ['6', '7', '8']
            },
            {
                id: 798,
                name: "Women's Athletic Sneakers",
                description: "Performance athletic sneakers for sports activities",
                price: 2699,
                originalPrice: 4049,
                image: "https://m.media-amazon.com/images/I/81YWJ+VY8cL._SY500_.jpg",
                special: true,
                sizes: ['6', '7', '8', '9']
            },
            {
                id: 799,
                name: "Women's Color Block Sneakers",
                description: "Bold color block design with contrasting panels",
                price: 1999,
                originalPrice: 2999,
                image: "https://5.imimg.com/data5/ECOM/Default/2023/1/MV/LK/MW/31800535/1659860897473-women-s-blue-white-color-block-sneakers-491178-1655816565-1-originnm80prcnt-500x500.jpg",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 800,
                name: "Women's Memory Foam Sneakers",
                description: "Ultra-comfortable sneakers with memory foam insoles",
                price: 2299,
                originalPrice: 3449,
                image: "https://m.media-amazon.com/images/I/61T+8z281uL._UY1000_.jpg",
                special: true,
                sizes: ['6', '7', '8', '9']
            },
            {
                id: 801,
                name: "Women's Retro Sneakers",
                description: "Vintage-inspired retro sneakers with classic design",
                price: 1799,
                originalPrice: 2699,
                image: "https://gullylabs.com/cdn/shop/files/DSC00020.jpg?v=1750673685&width=1280",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 802,
                name: "Women's Designer Sneakers",
                description: "Luxury designer sneakers with premium materials",
                price: 4599,
                originalPrice: 6899,
                image: "https://5.imimg.com/data5/ANDROID/Default/2021/12/KZ/WI/KG/143198508/product-jpeg-500x500.jpg",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 803,
                name: "Women's Breathable Mesh Sneakers",
                description: "Lightweight mesh sneakers with ventilation",
                price: 1899,
                originalPrice: 2849,
                image: "https://s.alicdn.com/@sc04/kf/Hc4d23142ce224e6e87f1c0645e39041dz.jpg",
                special: false,
                sizes: ['5', '6', '7', '8', '9']
            },
            {
                id: 804,
                name: "Women's Suede Sneakers",
                description: "Soft suede sneakers with elegant finish",
                price: 2399,
                originalPrice: 3599,
                image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/d/3d365a2QCONVE00010688_1.jpg?tr=w-512",
                special: true,
                sizes: ['6', '7', '8']
            },
            {
                id: 805,
                name: "Women's Knit Sneakers",
                description: "Flexible knit sneakers with sock-like fit",
                price: 2099,
                originalPrice: 3149,
                image: "https://s7.landsend.com/is/image/LandsEnd/548487_LEPP_L1_634?$xl$&wid=1003&hei=1003",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 806,
                name: "Women's Trail Running Sneakers",
                description: "Durable trail runners with aggressive tread",
                price: 2799,
                originalPrice: 4199,
                image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/379135/02/sv01/fnd/IND/fmt/png/Deviate-NITRO-2-WTRepel-Women's-Trail-Running-Shoes",
                special: true,
                sizes: ['6', '7', '8', '9']
            },
            {
                id: 807,
                name: "Women's Metallic Sneakers",
                description: "Shiny metallic sneakers for statement look",
                price: 1999,
                originalPrice: 2999,
                image: "https://uspoloassn.in/cdn/shop/files/1_89389033-a57a-4f75-a748-edf3e4b7623f_500x.jpg?v=1731678208",
                special: false,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 808,
                name: "Women's Minimalist Sneakers",
                description: "Simple minimalist design with clean lines",
                price: 1699,
                originalPrice: 2549,
                image: "https://m.media-amazon.com/images/I/81rsfdkf3QL._UY1000_.jpg",
                special: true,
                sizes: ['5', '6', '7', '8']
            },
            {
                id: 809,
                name: "Women's Cross Training Sneakers",
                description: "Versatile cross trainers for gym workouts",
                price: 2499,
                originalPrice: 3749,
                image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/e91c594c-8e6e-4ff4-948f-70e01c817755/W+NIKE+AIR+MAX+BELLA+TR+5.png",
                special: false,
                sizes: ['6', '7', '8', '9']
            },
            {
                id: 810,
                name: "Women's Eco-Friendly Sneakers",
                description: "Sustainable sneakers made from recycled materials",
                price: 2199,
                originalPrice: 3299,
                image: "https://brownliving.in/cdn/shop/files/gs-nature-20-womens-eco-friendly-shoes-greensole-sustainable-womens-casual-shoes-brown-living-gs-ntur2o-wsnkr-715702.jpg?v=1730129201",
                special: true,
                sizes: ['5', '6', '7', '8']
            }
                    ]
                }
            }
        };

        // Cart Data
        let cart = [];
        let totalItems = 0;
        let currentUser = null;
        let currentCategory = 'men';
        let currentSubcategory = 'shirts';
        let currentKidsSubcategory = 'boys';
        let currentAccessoriesSubcategory = 'menAccessories';
        let currentShoesSubcategory = 'menShoes';

        // DOM Elements
        const productItemsContainer = document.getElementById('productItems');
        const cartIcon = document.getElementById('cartIcon');
        const cartCount = document.getElementById('cartCount');
        const cartModal = document.getElementById('cartModal');
        const closeModal = document.getElementById('closeModal');
        const cartItemsContainer = document.getElementById('cartItems');
        const totalPriceElement = document.getElementById('totalPrice');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const categoryTabs = document.querySelectorAll('.category-tab');
        const authModal = document.getElementById('authModal');
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        const authClose = document.getElementById('authClose');
        const authTabs = document.querySelectorAll('.auth-tab');
        const authForms = document.querySelectorAll('.auth-form');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const authModalTitle = document.getElementById('authModalTitle');
        const authToggleLinks = document.querySelectorAll('.auth-toggle');
        const paymentOptions = document.querySelectorAll('.payment-option');

        // Subcategory elements
        const menSubcategories = document.getElementById('menSubcategories');
        const womenSubcategories = document.getElementById('womenSubcategories');
        const kidsSubcategories = document.getElementById('kidsSubcategories');
        const boysSubcategories = document.getElementById('boysSubcategories');
        const girlsSubcategories = document.getElementById('girlsSubcategories');
        const accessoriesSubcategories = document.getElementById('accessoriesSubcategories');
        const menAccessoriesSubcategories = document.getElementById('menAccessoriesSubcategories');
        const womenAccessoriesSubcategories = document.getElementById('womenAccessoriesSubcategories');
        const shoesSubcategories = document.getElementById('shoesSubcategories');
        const menShoesSubcategories = document.getElementById('menShoesSubcategories');
        const womenShoesSubcategories = document.getElementById('womenShoesSubcategories');
        const allSubcategoryTabs = document.querySelectorAll('.subcategory-tab');

        // Render Product Items by Category and Subcategory
        function renderProductItems(category = 'men', subcategory = 'shirts') {
            currentCategory = category;
            currentSubcategory = subcategory;
            productItemsContainer.innerHTML = '';
            
            let items = [];
            
            if (category === 'kids') {
                items = productData[category][currentKidsSubcategory][subcategory] || [];
            } else if (category === 'accessories') {
                items = productData[category][currentAccessoriesSubcategory][subcategory] || [];
            } else if (category === 'shoes') {
                items = productData[category][currentShoesSubcategory][subcategory] || [];
            } else {
                items = productData[category][subcategory] || [];
            }
            
            if (items.length === 0) {
                productItemsContainer.innerHTML = '<p class="empty-message">No products available in this category</p>';
                return;
            }
            
            items.forEach((item, index) => {
                const productItemElement = document.createElement('div');
                productItemElement.classList.add('product-item');
                productItemElement.style.animation = `fadeIn 0.5s ease-out ${index*0.1}s both`;
                
                let badge = '';
                if (item.special) {
                    badge = '<div class="special-badge"><i class="fas fa-star"></i> Special</div>';
                }
                
                // Add new badge for first two items in each category
                if (index < 2) {
                    badge += '<div class="new-badge">New</div>';
                }
                
                const discount = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
                
                // Generate size options
                let sizeOptions = '';
                if (item.sizes && item.sizes.length > 0) {
                    sizeOptions = '<div class="size-selector">';
                    item.sizes.forEach(size => {
                        sizeOptions += `<div class="size-option" data-size="${size}">${size}</div>`;
                    });
                    sizeOptions += '</div>';
                }

                productItemElement.innerHTML = `
                    ${badge}
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}" />
                </div>         <div class="item-info">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        ${sizeOptions}
                        <div class="item-price">
                            <div>
                                <span class="price">${item.price.toFixed(2)}</span>
                                <span class="original-price">₹${item.originalPrice.toFixed(2)}</span>
                                <span class="discount">${discount}% OFF</span>
                            </div>
                            <button class="add-to-cart" data-id="${item.id}">
                                <i class="fas fa-shopping-bag"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                `;
                productItemsContainer.appendChild(productItemElement);
            });

            // Add event listeners to add-to-cart buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', addToCart);
            });
            
            // Add event listeners to size options
            document.querySelectorAll('.size-option').forEach(option => {
                option.addEventListener('click', function() {
                    // Remove selected class from all size options in this product
                    const parent = this.closest('.product-item');
                    parent.querySelectorAll('.size-option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    
                    // Add selected class to clicked size option
                    this.classList.add('selected');
                });
            });
        }

        // Add item to cart
        function addToCart(e) {
            if (!currentUser) {
                showNotification('Please login to add items to cart');
                showAuthModal('login');
                return;
            }
            
            const itemId = parseInt(e.target.getAttribute('data-id'));
            let item;
            
            // Find item in current category and subcategory
            if (currentCategory === 'kids') {
                item = productData[currentCategory][currentKidsSubcategory][currentSubcategory].find(item => item.id === itemId);
            } else if (currentCategory === 'accessories') {
                item = productData[currentCategory][currentAccessoriesSubcategory][currentSubcategory].find(item => item.id === itemId);
            } else if (currentCategory === 'shoes') {
                item = productData[currentCategory][currentShoesSubcategory][currentSubcategory].find(item => item.id === itemId);
            } else {
                item = productData[currentCategory][currentSubcategory].find(item => item.id === itemId);
            }
            
            if (!item) return;
            
            // Get selected size
            const productItem = e.target.closest('.product-item');
            const selectedSizeElement = productItem.querySelector('.size-option.selected');
            const selectedSize = selectedSizeElement ? selectedSizeElement.getAttribute('data-size') : 'One Size';
            
            // Check if item already in cart with same size
            const existingItem = cart.find(cartItem => cartItem.id === itemId && cartItem.size === selectedSize);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...item,
                    quantity: 1,
                    size: selectedSize
                });
            }
            
            totalItems += 1;
            updateCart();
            
            // Show feedback animation
            const button = e.target.closest('.add-to-cart');
            button.innerHTML = '<i class="fas fa-check"></i> Added';
            button.style.background = 'linear-gradient(45deg, var(--success), #20bf6b)';
            
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-shopping-bag"></i> Add to Cart';
                button.style.background = 'linear-gradient(45deg, var(--primary), var(--accent))';
            }, 1000);
            
            // Bounce cart icon
            cartIcon.style.animation = 'bounce 0.8s';
            setTimeout(() => {
                cartIcon.style.animation = '';
            }, 800);
        }

        // Update cart UI
        function updateCart() {
            cartCount.textContent = totalItems;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="empty-cart-message">
                        <i class="fas fa-shopping-bag"></i>
                        <p>Your shopping bag is empty</p>
                    </div>
                `;
                totalPriceElement.textContent = '0.00';
                document.getElementById('deliveryDetails').style.display = 'none';
                return;
            }
            
            document.getElementById('deliveryDetails').style.display = 'block';
            
            cartItemsContainer.innerHTML = '';
            let totalPrice = 0;
            
            cart.forEach((item, index) => {
                totalPrice += item.price * item.quantity;
                
                const cartItemElement = document.createElement('div');
                cartItemElement.classList.add('cart-item');
                cartItemElement.style.animation = `fadeIn 0.5s ease-out ${index*0.1}s both`;
                
                cartItemElement.innerHTML = `
                    <div class="cart-item-info">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'">
                        <div class="cart-item-details">
                            <h3>${item.name}</h3>
                            <p>₹${item.price.toFixed(2)} each | Size: ${item.size}</p>
                        </div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}" data-size="${item.size}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}" data-size="${item.size}">+</button>
                        <button class="remove-item" data-id="${item.id}" data-size="${item.size}" title="Remove item">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                    <div class="cart-item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                    </div>
                `;
                cartItemsContainer.appendChild(cartItemElement);
            });
            
            // Add event listeners to quantity buttons
            document.querySelectorAll('.quantity-btn').forEach(button => {
                button.addEventListener('click', updateQuantity);
            });
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', removeItem);
            });
            
            totalPriceElement.textContent = totalPrice.toFixed(2);
        }

        // Update item quantity
        function updateQuantity(e) {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            const itemSize = e.target.getAttribute('data-size');
            const item = cart.find(item => item.id === itemId && item.size === itemSize);
            
            if (e.target.classList.contains('plus')) {
                item.quantity += 1;
                totalItems += 1;
            } else if (e.target.classList.contains('minus') && item.quantity > 1) {
                item.quantity -= 1;
                totalItems -= 1;
            }
            
            updateCart();
        }

        // Remove item from cart
        function removeItem(e) {
            const itemId = parseInt(e.target.closest('.remove-item').getAttribute('data-id'));
            const itemSize = e.target.closest('.remove-item').getAttribute('data-size');
            const itemIndex = cart.findIndex(item => item.id === itemId && item.size === itemSize);
            
            if (itemIndex !== -1) {
                totalItems -= cart[itemIndex].quantity;
                cart.splice(itemIndex, 1);
                updateCart();
                
                // Show notification
                showNotification('Item removed from cart');
            }
        }

        // Show notification
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Checkout
        function checkout() {
            if (cart.length === 0) {
                showNotification('Your cart is empty!');
                return;
            }
            
            const name = document.getElementById('deliveryName').value;
            const address = document.getElementById('deliveryAddress').value;
            
            if (!name || !address) {
                showNotification('Please fill in delivery details');
                return;
            }
            
            const orderDetails = {
                items: cart,
                total: parseFloat(totalPriceElement.textContent),
                delivery: {
                    name: name,
                    phone: document.getElementById('deliveryPhone').value,
                    address: address,
                    city: document.getElementById('deliveryCity').value,
                    pincode: document.getElementById('deliveryPincode').value,
                    instructions: document.getElementById('deliveryInstructions').value
                },
                paymentMethod: document.querySelector('.payment-option.active p').textContent,
                customerEmail: currentUser ? currentUser.email : 'guest@example.com'
            };
            
            // In a real app, you would send this to your backend
            console.log('Order placed:', orderDetails);
            
            // Show order confirmation
            showOrderConfirmation(orderDetails);
            
            // Send order to email (simulated)
            sendOrderToEmail(orderDetails);
        }

        // Show order confirmation
        function showOrderConfirmation(orderDetails) {
            const confirmationHTML = `
                <div class="order-confirmation">
                    <i class="fas fa-check-circle"></i>
                    <h3>Order Placed Successfully!</h3>
                    <p>Thank you for your order, ${orderDetails.delivery.name}!</p>
                    <p>Your fashion items will be carefully packaged and delivered soon.</p>
                    <p>Order confirmation has been sent to ${orderDetails.customerEmail}</p>
                    <div class="order-total">
                        Order Total: ₹${orderDetails.total.toFixed(2)}
                    </div>
                </div>
            `;
            
            cartItemsContainer.innerHTML = confirmationHTML;
            document.getElementById('deliveryDetails').style.display = 'none';
            document.querySelector('.payment-methods').style.display = 'none';
            checkoutBtn.style.display = 'none';
            
            // Reset cart after 5 seconds
            setTimeout(() => {
                cart = [];
                totalItems = 0;
                updateCart();
                cartModal.classList.remove('show');
                setTimeout(() => {
                    cartModal.style.display = 'none';
                }, 300);
                
                // Reset checkout UI
                document.getElementById('deliveryDetails').style.display = 'block';
                document.querySelector('.payment-methods').style.display = 'block';
                checkoutBtn.style.display = 'flex';
                cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your shopping bag is empty</p>';
            }, 5000);
        }

        // Simulate sending order to email
        function sendOrderToEmail(orderDetails) {
            // In a real app, this would be an API call to your backend
            console.log(`Sending order confirmation to: ${orderDetails.customerEmail}`);
            console.log(`Order details sent to email`);
            
            // For demo purposes, we're just logging to console
            const emailContent = `
                New Order Received!
                
                Customer: ${orderDetails.delivery.name}
                Email: ${orderDetails.customerEmail}
                Phone: ${orderDetails.delivery.phone}
                
                Delivery Address:
                ${orderDetails.delivery.address}
                ${orderDetails.delivery.city} - ${orderDetails.delivery.pincode}
                
                Special Instructions:
                ${orderDetails.delivery.instructions || 'None'}
                
                Order Items:
                ${orderDetails.items.map(item => `
                  - ${item.name} (Size: ${item.size}) (₹${item.price.toFixed(2)} x ${item.quantity}) = ₹${(item.price * item.quantity).toFixed(2)}
                `).join('')}
                
                Payment Method: ${orderDetails.paymentMethod}
                Total Amount: ₹${orderDetails.total.toFixed(2)}
                
                Thank you for your order!
            `;
            
            console.log('Email content:', emailContent);
        }

        // Show auth modal with specific tab
        function showAuthModal(tab) {
            authModal.style.display = 'flex';
            setTimeout(() => {
                authModal.classList.add('show');
            }, 10);
            switchAuthTab(tab);
        }

        // Hide auth modal
        function hideAuthModal() {
            authModal.classList.remove('show');
            setTimeout(() => {
                authModal.style.display = 'none';
            }, 300);
        }

        // Switch between login/signup tabs
        function switchAuthTab(tab) {
            authTabs.forEach(authTab => {
                if (authTab.dataset.tab === tab) {
                    authTab.classList.add('active');
                } else {
                    authTab.classList.remove('active');
                }
            });
            
            authForms.forEach(form => {
                if (form.id === `${tab}Form`) {
                    form.classList.add('active');
                    authModalTitle.textContent = tab === 'login' ? 'Welcome Back!' : 'Create Account';
                } else {
                    form.classList.remove('active');
                }
            });
        }

        // Handle login
        function handleLogin(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Simple validation
            if (!email || !password) {
                showNotification('Please fill in all fields');
                return;
            }
            
            // In a real app, you would validate with server here
            currentUser = {
                name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
                email: email
            };
            
            showNotification(`Welcome back, ${currentUser.name}!`);
            hideAuthModal();
            loginForm.reset();
            
            // Update auth buttons
            loginBtn.textContent = currentUser.name;
            signupBtn.textContent = 'Logout';
            signupBtn.onclick = handleLogout;
        }

        // Handle signup
        function handleSignup(e) {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const phone = document.getElementById('signupPhone').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            
            // Simple validation
            if (!name || !email || !phone || !password || !confirmPassword) {
                showNotification('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                showNotification('Passwords do not match');
                return;
            }
            
            // In a real app, you would send this to server
            currentUser = {
                name: name,
                email: email,
                phone: phone
            };
            
            showNotification(`Welcome to FashionHub, ${currentUser.name}!`);
            hideAuthModal();
            signupForm.reset();
            switchAuthTab('login');
            
            // Update auth buttons
            loginBtn.textContent = currentUser.name;
            signupBtn.textContent = 'Logout';
            signupBtn.onclick = handleLogout;
        }

        // Handle logout
        function handleLogout() {
            currentUser = null;
            showNotification('Logged out successfully');
            
            // Update auth buttons
            loginBtn.textContent = 'Login';
            signupBtn.textContent = 'Sign Up';
            signupBtn.onclick = () => showAuthModal('signup');
        }

        // Update subcategory visibility based on selected category
        function updateSubcategoryVisibility(category) {
            // Hide all subcategory sections first
            menSubcategories.style.display = 'none';
            womenSubcategories.style.display = 'none';
            kidsSubcategories.style.display = 'none';
            boysSubcategories.style.display = 'none';
            girlsSubcategories.style.display = 'none';
            accessoriesSubcategories.style.display = 'none';
            menAccessoriesSubcategories.style.display = 'none';
            womenAccessoriesSubcategories.style.display = 'none';
            shoesSubcategories.style.display = 'none';
            menShoesSubcategories.style.display = 'none';
            womenShoesSubcategories.style.display = 'none';
            
            // Show the appropriate subcategory section
            if (category === 'men') {
                menSubcategories.style.display = 'flex';
                renderProductItems('men', 'shirts');
            } else if (category === 'women') {
                womenSubcategories.style.display = 'flex';
                renderProductItems('women', 'kurtis');
            } else if (category === 'kids') {
                kidsSubcategories.style.display = 'flex';
                boysSubcategories.style.display = 'flex';
                currentKidsSubcategory = 'boys';
                renderProductItems('kids', 'bshirts');
            } else if (category === 'accessories') {
                accessoriesSubcategories.style.display = 'flex';
                menAccessoriesSubcategories.style.display = 'flex';
                currentAccessoriesSubcategory = 'menAccessories';
                renderProductItems('accessories', 'watches');
            } else if (category === 'shoes') {
                shoesSubcategories.style.display = 'flex';
                menShoesSubcategories.style.display = 'flex';
                currentShoesSubcategory = 'menShoes';
                renderProductItems('shoes', 'sneakers');
            }
        }

        // Event Listeners
        // Category tabs
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const category = tab.getAttribute('data-category');
                
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                updateSubcategoryVisibility(category);
            });
        });

        // Subcategory tabs for men
        menSubcategories.querySelectorAll('.subcategory-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                menSubcategories.querySelectorAll('.subcategory-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const subcategory = tab.getAttribute('data-subcategory');
                renderProductItems('men', subcategory);
            });
        });

        // Subcategory tabs for women
        womenSubcategories.querySelectorAll('.subcategory-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                womenSubcategories.querySelectorAll('.subcategory-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const subcategory = tab.getAttribute('data-subcategory');
                renderProductItems('women', subcategory);
            });
        });

        // Subcategory tabs for kids (boys/girls selection)
        kidsSubcategories.querySelectorAll('.subcategory-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                kidsSubcategories.querySelectorAll('.subcategory-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const subcategory = tab.getAttribute('data-subcategory');
                currentKidsSubcategory = subcategory;
                
                if (subcategory === 'boys') {
                    boysSubcategories.style.display = 'flex';
                    girlsSubcategories.style.display = 'none';
                    renderProductItems('kids', 'bshirts');
                } else {
                    boysSubcategories.style.display = 'none';
                    girlsSubcategories.style.display = 'flex';
                    renderProductItems('kids', 'gtops');
                }
            });
        });

        // Subcategory tabs for boys
        boysSubcategories.querySelectorAll('.subcategory-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                boysSubcategories.querySelectorAll('.subcategory-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const subcategory = tab.getAttribute('data-subcategory');
                renderProductItems('kids', subcategory);
            });
        });

        // Subcategory tabs for girls
        girlsSubcategories.querySelectorAll('.subcategory-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                girlsSubcategories.querySelectorAll('.subcategory-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const subcategory = tab.getAttribute('data-subcategory');
                renderProductItems('kids', subcategory);
            });
        });

        // Subcategory tabs for accessories (men/women selection)
        accessoriesSubcategories.querySelectorAll('.subcategory-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                accessoriesSubcategories.querySelectorAll('.subcategory-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const subcategory = tab.getAttribute('data-subcategory');
                currentAccessoriesSubcategory = subcategory;
                
                if (subcategory === 'menAccessories') {
                    menAccessoriesSubcategories.style.display = 'flex';
                    womenAccessoriesSubcategories.style.display = 'none';
                    renderProductItems('accessories', 'watches');
                } else {
                    menAccessoriesSubcategories.style.display = 'none';
                    womenAccessoriesSubcategories.style.display = 'flex';
                    renderProductItems('accessories', 'handbags');
                }
            });
        });

        // Subcategory tabs for men's accessories
        menAccessoriesSubcategories.querySelectorAll('.subcategory-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                menAccessoriesSubcategories.querySelectorAll('.subcategory-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const subcategory = tab.getAttribute('data-subcategory');
                renderProductItems('accessories', subcategory);
            });
        });

        // Subcategory tabs for women's accessories
        womenAccessoriesSubcategories.querySelectorAll('.subcategory-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                womenAccessoriesSubcategories.querySelectorAll('.subcategory-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const subcategory = tab.getAttribute('data-subcategory');
                renderProductItems('accessories', subcategory);
            });
        });

        // Subcategory tabs for shoes (men/women selection)
        shoesSubcategories.querySelectorAll('.subcategory-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                shoesSubcategories.querySelectorAll('.subcategory-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const subcategory = tab.getAttribute('data-subcategory');
                currentShoesSubcategory = subcategory;
                
                if (subcategory === 'menShoes') {
                    menShoesSubcategories.style.display = 'flex';
                    womenShoesSubcategories.style.display = 'none';
                    renderProductItems('shoes', 'sneakers');
                } else {
                    menShoesSubcategories.style.display = 'none';
                    womenShoesSubcategories.style.display = 'flex';
                    renderProductItems('shoes', 'heels');
                }
            });
        });

        // Subcategory tabs for men's shoes
        menShoesSubcategories.querySelectorAll('.subcategory-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                menShoesSubcategories.querySelectorAll('.subcategory-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const subcategory = tab.getAttribute('data-subcategory');
                renderProductItems('shoes', subcategory);
            });
        });

        // Subcategory tabs for women's shoes
        womenShoesSubcategories.querySelectorAll('.subcategory-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                womenShoesSubcategories.querySelectorAll('.subcategory-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const subcategory = tab.getAttribute('data-subcategory');
                renderProductItems('shoes', subcategory);
            });
        });

        // Cart
        cartIcon.addEventListener('click', () => {
            if (!currentUser) {
                showNotification('Please login to view your cart');
                showAuthModal('login');
                return;
            }
            cartModal.style.display = 'flex';
            setTimeout(() => {
                cartModal.classList.add('show');
            }, 10);
        });

        closeModal.addEventListener('click', () => {
            cartModal.classList.remove('show');
            setTimeout(() => {
                cartModal.style.display = 'none';
            }, 300);
        });

        checkoutBtn.addEventListener('click', checkout);

        // Payment options
        paymentOptions.forEach(option => {
            option.addEventListener('click', () => {
                paymentOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
            });
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.remove('show');
                setTimeout(() => {
                    cartModal.style.display = 'none';
                }, 300);
            }
            if (e.target === authModal) {
                hideAuthModal();
            }
        });

        // Auth tabs
        authTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                switchAuthTab(tab.dataset.tab);
            });
        });

        // Auth toggle links
        authToggleLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                switchAuthTab(link.dataset.tab);
            });
        });

        // Auth buttons
        loginBtn.addEventListener('click', () => {
            showAuthModal('login');
        });

        signupBtn.addEventListener('click', () => {
            if (currentUser) {
                handleLogout();
            } else {
                showAuthModal('signup');
            }
        });

        authClose.addEventListener('click', hideAuthModal);

        // Form submissions
        loginForm.addEventListener('submit', handleLogin);
        signupForm.addEventListener('submit', handleSignup);

        // Initialize
        updateSubcategoryVisibility('men');
   