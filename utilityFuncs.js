function linInt(A, B, t){
    return A+(B-A)*t
}

function getIntersect(A, B, C, D){

    const nume = (D.x - C.x)*(A.y - C.y) - (D.y - C.y)*(A.x - C.x)
    
    const numeU = (C.y - A.y)*(A.x - B.x) - (C.x - A.x)*(A.y - B.y)

    const denom = (D.y - C.y)*(B.x - A.x) - (D.x - C.x)*(B.y - A.y)

    if(denom != 0){
        const t = nume/denom
        const u = numeU/denom
        if(t >= 0 && t<= 1 && u >= 0 && u <= 1){
            return {
                x: linInt(A.x, B.x, t),
                y: linInt(A.y, B.y, t),
                offset: t
            }
        } 
    }

    return null
    
}

function polysIntersect(poly1, poly2){

    for (let i = 0; i < poly1.length; i++) {
        for (let j = 0; j < poly2.length; j++) {

            const touch = getIntersect(
                poly1[i],
                poly1[(i+1) % poly1.length],
                poly2[j],
                poly2[(j+1) % poly2.length]
            )
            
            if(touch){
                return true
            }
        }
        
    }

    return false
}



roadLines = [
    [{x: 140, y: 660}, {x: 140, y: 290}],
    [{x: 140, y: 290}, {x: 180, y: 180}],
    [{x: 180, y: 180}, {x: 370, y: 50}],
    [{x: 370, y: 50}, {x: 500, y: 50}],
    [{x: 500, y: 50}, {x: 730, y: 300}],
    [{x: 730, y: 300}, {x: 780, y: 340}],
    [{x: 780, y: 340}, {x: 880, y: 360}],
    [{x: 880, y: 360}, {x: 1060, y: 440}],
    [{x: 1060, y: 440}, {x: 1090, y: 520}],
    [{x: 1090, y: 520}, {x: 1090, y: 620}],
    [{x: 1090, y: 620}, {x: 1000, y: 750}],
    [{x: 1000, y: 750}, {x: 400, y: 780}],
    [{x: 400, y: 780}, {x: 220, y: 750}],
    [{x: 220, y: 750}, {x: 140, y: 660}], //Outside Border until here -- 14 segments

    [{x: 250, y: 660}, {x: 250, y: 300}],
    [{x: 250, y: 300}, {x: 300, y: 200}],
    [{x: 300, y: 200}, {x: 400, y: 150}],
    [{x: 400, y: 150}, {x: 500, y: 160}],
    [{x: 500, y: 160}, {x: 700, y: 400}],
    [{x: 700, y: 400}, {x: 800, y: 450}],
    [{x: 800, y: 450}, {x: 900, y: 450}],
    [{x: 900, y: 450}, {x: 990, y: 500}],
    [{x: 990, y: 500}, {x: 990, y: 600}],
    [{x: 990, y: 600}, {x: 940, y: 670}],
    [{x: 940, y: 670}, {x: 400, y: 700}],
    [{x: 400, y: 700}, {x: 250, y: 660}], //Inside Border until here -- 12 segments

    [{x: 100, y: 660}, {x: 300, y: 660}] //reverse Stopper
]


checkpointLines = [
    [{x: 100, y: 550}, {x: 300, y: 550}],
    [{x: 100, y: 450}, {x: 300, y: 450}],
    [{x: 100, y: 350}, {x: 300, y: 350}],
    [{x: 100, y: 250}, {x: 300, y: 300}],
    [{x: 150, y: 200}, {x: 350, y: 250}],
    [{x: 180, y: 120}, {x: 350, y: 200}],
    [{x: 150, y: 200}, {x: 350, y: 250}],
    [{x: 280, y: 80}, {x: 380, y: 190}],
    [{x: 364, y: 29}, {x: 405, y: 171}],
    [{x:440, y:25}, {x:451, y:172}],
    [{x:506, y:33}, {x:495, y:180}],
    [{x:577, y:74}, {x:511, y:203}],
    [{x:619, y:136}, {x:532, y:242}],
    [{x:663, y:195}, {x:580, y:284}],
    [{x:715, y:237}, {x:605, y:327}],
    [{x:739, y:278}, {x:644, y:365}],
    [{x:762, y:295}, {x:696, y:421}],
    [{x:793, y:314}, {x:748, y:444}],
    [{x:827, y:322}, {x:795, y:466}],
    [{x:862, y:331}, {x:854, y:474}],
    [{x:940, y:354}, {x:907, y:480}],
    [{x:990, y:380}, {x:956, y:501}],
    [{x:1079, y:411}, {x:975, y:516}],
    [{x:1105, y:492}, {x:972, y:545}],
    [{x:1106, y:557}, {x:961, y:574}],
    [{x:1105, y:638}, {x:960, y:591}],
    [{x:1069, y:711}, {x:941, y:615}],
    [{x:1013, y:777}, {x:918, y:644}],
    [{x:912, y:785}, {x:883, y:648}],
    [{x:801, y:779}, {x:787, y:649}],
    [{x:684, y:652}, {x:680, y:785}],
    [{x:570, y:658}, {x:563, y:792}],
    [{x:476, y:663}, {x:466, y:794}],
    [{x:405, y:663}, {x:346, y:798}],
    [{x:311, y:633}, {x:249, y:777}],
    [{x:273, y:634}, {x:163, y:739}]
]
