function Station(name,latitude,longitude){
    this.name=name
    this.latitude=latitude
    this.longitude=longitude
}
Station.prototype = {
    Stationdistance(station) {
        //출발지
        const lat1 = this.latitude
        const lon1 = this.longitude
        //목적지
        const lat2 = station.latitude
        const lon2 = station.longitude
        //지구 반지름
        const R = 6371e3
        //좌표를 라디안 단위로 변환
        const φ1 = lat1 * Math.PI / 180;
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) 
        + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c/1000;
        const price=Math.floor(d)*100
        betweenDistance={
            distance:d,
            price:price
        }
        return betweenDistance
    }
}

const seoul=new Station("seoul",37.55620110026294,126.97223116703012)
const daejeon=new Station("daejeon",36.332516127741,127.43421099777726)
const dongdaegu=new Station("dongdaegu",35.88049128950934,128.62837657353532)
const busan=new Station("busan",35.116613680508806,129.04009077373016)



const sd=seoul.Stationdistance(daejeon)
const dd=daejeon.Stationdistance(dongdaegu)
const db=dongdaegu.Stationdistance(busan)

console.log(sd)
console.log(dd)
console.log(db)

const stationD={
    "서울역-대전역":{
        거리:sd.distance,
        요금:sd.price
    },
    "대전역-동대구역":{
        거리:dd.distance,
        요금:dd.price
    },
    "동대구역-부산역":{
      거리:db.distance,
      요금:db.price  
    }
}
console.table(stationD)

const passPrice={...stationD,
    "서울역-동대구역":{
        거리:stationD["서울역-대전역"].거리+stationD["대전역-동대구역"].거리,
        요금:stationD["서울역-대전역"].요금+stationD["대전역-동대구역"].요금
    },
    "서울역-부산역":{
        거리:stationD["서울역-대전역"].거리
        +stationD["대전역-동대구역"].거리
        +stationD["동대구역-부산역"].거리,
        요금:stationD["서울역-대전역"].요금+stationD["대전역-동대구역"].요금+stationD["동대구역-부산역"].요금
    },
    "대전역-부산역":{
        거리:stationD["동대구역-부산역"].거리+stationD["대전역-동대구역"].거리,
        요금:stationD["동대구역-부산역"].요금+stationD["대전역-동대구역"].요금
    }
}

console.table(passPrice)


