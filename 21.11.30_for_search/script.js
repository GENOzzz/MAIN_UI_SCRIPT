// const body=document.querySelector('body');

const divm=document.createElement('div');
divm.id="menu";

for(let i =0;i<3;i++){
    const bar=document.createElement('div');
    bar.className="bar";
    divm.appendChild(bar)
}

const divs=document.createElement('div');
divs.id="screen-mode";
const divsc=document.createElement('div');
divsc.id="circle-btn";
divs.append(divsc);

const divp=document.createElement('div');
divp.id="profile-menu";
const imga=document.createElement('img')
imga.src="data:image/jpeg;base64,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";
divp.append(imga)

const nav=document.createElement('div');
nav.id="nav";
nav.append(divm);
nav.append(divs);
nav.append(divp);

const divc=document.createElement('div');
divc.id="center";
const divh=document.createElement('div');
divh.id="heading";
const My=document.createElement('h1');
My.innerText="My photo gallery"
const my=document.createElement('h4');
my.innerText="my old memories from my life"
const divse=document.createElement('div');
divse.id="search";
const inp=document.createElement('input');
inp.type="text";
inp.placeholder="Search photo...."

divh.append(My);
divh.append(my);
divse.append(inp);
divc.append(divh);
divc.append(divse);
const title=document.createElement('div');
title.id="title";
title.append(divc);

const plist=document.createElement('div');
plist.id="photo-list";

for(let i=0; i<9;i++){
    const divcon=document.createElement('div');
    divcon.className="photo-container";
    const divcard=document.createElement('div');
    divcard.className="photo-card";
    const cardimg=document.createElement('img');
    if(i==2){
        cardimg.src="data:image/jpeg;base64,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"
    }
    else{
        cardimg.src='dog.png';
    }
    divcard.append(cardimg);
    const cardname=document.createElement('div');
    cardname.className="photo-name";
    if(i==2){
        cardname.innerText="누룽지" //innerHTML은 태그가 들어갈 경우.
    }else if(i==4) {
        cardname.innerText="Sunrise"        
    }else{
        cardname.innerText="화가난다";
    }
    divcard.append(cardimg);
    divcon.append(divcard);
    divcon.append(cardname);
    plist.append(divcon);
}

const divmh=document.createElement('div');
divmh.id="header"
divmh.innerText="FoodRecipe"
const divmb=document.createElement('div');
divmb.id="body"
const divmbp=document.createElement('p');
divmbp.innerText=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi nesciunt facilis tempora qui temporibus, odio dolores reiciendis, quis voluptate ducimus quam. Voluptatum omnis, rem quam porro ipsam nam dolorum.
Laudantium aliquam suscipit, nobis exercitationem neque inventore incidunt quos possimus numquam! Temporibus adipisci, illum in fuga earum magnam consequatur minima. Neque, labore esse tempora tenetur doloribus beatae. Facere, dolorum incidunt?
Nulla facere earum fuga doloremque magni. Aspernatur excepturi ipsam commodi in ullam? Dolore, ipsa, a dignissimos, vel nulla alias accusantium qui voluptatibus officia minus est libero! Adipisci, fugit? Architecto, quia!`;
const divmf=document.createElement('div');
divmf.id="footer";
const ft=document.createElement('button');
ft.innerText="Close";
divmb.append(divmbp);
divmf.append(ft);

const modalw=document.createElement('div');
modalw.className="modal-window";
modalw.append(divmh);
modalw.append(divmb);
modalw.append(divmf);

document.body.append(nav,title,plist,modalw);

//h4요소 검색후 컨텐츠 변경
const h4c=document.querySelector('h4');
h4c.innerText="WHWTHWHTWHTHWH";
//id가 profile-menu 인 요소 검색후 해당 요소 내부의 img src 변경
const pmc=document.querySelector('#profile-menu');
pmc.firstElementChild.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRYZGBgaGhoYHRoaGBgaGBwaGBgaGhgaGBocIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJSs0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQMGBwIBAAj/xAA8EAACAQMDAgQEBQMCBAcBAAABAgADBBESITEFQQYiUWETcYGhBzJCkfAUscEj0RVSYuFDRHKCg5LxM//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACYRAAICAgIBBAEFAAAAAAAAAAABAhEDIRIxQRMiUWFxBDJCobH/2gAMAwEAAhEDEQA/AK+1PyHTUBXHB5HyiQHbnaM3sX0nykj1g5s+3BM5ZOT2kdcoSluK6OLbp4Yhofc9Pd9KqAVyM74IGd9jI7S2ZBs0Ksb93coRsAWzwdpOcsbTbTTRKUUu1R1W/wD6gEEAEY5GyxT165Gkf9TExq3UGxhsOMnkdvQHkStdaZWddB2A3B5Un+495HDBOSafRFr4IGp4QsOZe7Tp2m2p/DrIaa09TFsLpqt+b3PMo9GvuE5jy4AVUQfMy2V0q+QRdWG2l5SpIXdA75OCfyj5RF1PqL1zqYnA4HYfISO7cucDgQ+2tF0bxF7Y2wyyNqvAssqOrniE1/NsOBDadIcAbT24TA0qMsYYzTfJiX4FZLt5E5M8r9PWiMsdTHcyw2FkKSlju5i+46cXYs283rcnrr/Q6WiPprKwzjAkXUL8/kSRXNZgdCDAkvT6C5yx3jQxpvkwppbE1OmdW4mi9F8OoArOwORnAiKtbou8Vv1J6beRyB6ZyJSalJe0STb6NCurV0HkGVxsJWFrMjnScN3gVPxTXLoWI0jYjsfec9VvCH17EN6dpHHCUW1JaYYxdM+va7MfOcn3jS2oJUQYGCJXqd2rNky42dBCoNPuIMz4pUB6K+bh7dzpXMJHitGRtYw3pDb+38rHIJAlBqU2ZjgE79pscI5NyQUOA5quN/KT+0aN0UqRg5WK+k9KqEjSPMe3YS9f8HrKgLYO3abNKWOuHQWqKadQqaA3fvL1RouqKRjjtK3c9F1NqGzQqn1p0T4RXLDbMlOXqxTT6A5WN6XS6irhW2PIMAubUqx1Jn3H+JbDeovMCq3tM84nqyjrR6m10UK6ugrnRkj3EksrjVrbGMDGfnLRc06BGSoMAsehoWYavITnA/tmcmTBJql5Oabl4eiuVHJ8oyfp68xNUTzMTzNJ6pRpU1wiqG9ucfOVfqlgG/1E9fMP8ykP07grTIuL7A+jdOGdbdt4N1O8yxIjWpX00cesrFwcmSilOd+ETrYZbVQ20ZFyBjOYqs6Wga2lz8JdAath33Vv7TTpv6QYwcnSK/QqtqCgZjipWRFycapotLwnRIHk3G2Yt6p4IRjlSQRj3B9ftmc848n9F/Qa6ezP6NcklmPMZJWQL5jLTZ+DkIGvnYHHGc8j9hF/X/BB/wDC9sZP1Of2x9Y6xru9CSwSKLe4NTbgyAIVYNxHdr4fcMNQOcnbvgD7dv3nN/0eqz6EQnAznB2yc/2/tLxaSqxZYpLwJeq3RZQBEfxDLddeHagBGkkgEnb0zk/aVj+hfUfIcDnY/OVi1QFFrwMLKxd1LKuQOYZZWesFDtjvDvC10tJvOcIwwfTPvLYvRQ2Xp4w285cuWUbSX4FumU6x6Y1NipUNngxz8J7UfEK7PwAdhIussaI82xOw+cWm6q1FCszOvYHfEhHlN8pGbdVRN01VrVvO5XOcgHYx4ekU0RlRdznEA6R0wfEQPyx49pbb2tb0m0swBxxGzNppIEk418meotxQqBiSAD6ZGnMtN54vVdKoQ23mzxPL/rVEAhU15GPaZxdfnY8ZJOB2lMd5P3KgXey6XHWy7ahhYMrZyx3JlSVz6mMrbqOMA8SjxRinxRqsfX/UmOcGLldnUtqJ9oJeOQedpzbVSDqBlVNyZ2rM5SSQdT+KN9WR6Sz2NJ2TK9xKjS6g2rJWWLpfVGUkp+0qpbpMblFtpgTUWR3Vy2TxnPb3jcUdNLURnaJrzr9QuQyLkHuM7SdOvl1KuMDHbiIs0YppiJxvTBbi3DjB2HaK6nSmVtXKx2tymMgavl/tJCXZfJSJU+uB+wMlHzxRfJDDJadMW9Fsfj1VTGUzgjfBB9SOPnNi6VapSVUUYAEqPgjp4Uu5GlsgaSB9iJabu4ZP0An5naSk6EwwpfY4NbHBnrV88yvpWY+Yn+e4haOTJPJ4R0LFQYxAIxCC+YGinvCFM0W+guKBzZpnVjf+f7TtqCjJAGTzJXMgZjM5UZRs6pWYbkCdno9PBBRcHnYTmncYG5hFK4HrNHYkoyRWfEHg6nUplUAU5znGds5IA9TM3/rq9m5plm24BOcf4/abVcXQzzMv/ETpuayOiks/O2FwBsB7/t7S0Wpe1nNmx3Hl5OOjILxGNY5IOywu46O1vRd0AY547gT3pvWbW1t1R8CoPzAAk59doPe+Jjc0XW20l+NJOHx6gHmc7jNzpLX9HNUm6FNldOGD/qHrOryoXJd+TF9Ws1FF+JszDVg8j5xLX6k7ZC8TojjlJk3F3sIueoHJAi6pULHJngRu4jW06ZkajLqKiaqFSmEpT7xjcdL28sCemy7GZ/RrG130t8cbxcbSoo/KZorVKZ7iA3lzSVSTiU9KKWmdPCPdlMpqe8mS8KPkcd5PcXSufKNopuTuZypVLTIv2vTCrq61sWntNsKfeC0hnE6uqm2BNJW6Bd7OqlyVACHzGPun9fdVAq4I9eJWaK/qaetULHH0lE3HoaMmjS7OqXXWhYe4jy1uncAPvjYEY+898O2q07ammkZ0gtgb5O+87q2QDh0233HYiHJJSVM7cfaYZRo94TTwNpGGA7iRM+/8M4Xo6lsNZxOlaBpU5/mJ6LnGx+kykGgx2keuc/Fzt/PeQs4ztBI0USvTBgdzqXg/IdjCVORsZ43sPrAEipZcjbP1ijxzTY0da7ad87ZH74/v3jyyBVtv+0XeN7hUtn1rqztyBv2nTij5RzZpVaMPuqrOxLHeQUyyMHUlWByCNiDGFZM7xfUGJ1Jnm22wnrHWKlyytWIJUYyBjPzh3SqAIziIGWWPot0iphjvDLS0aTYzNipHEKSjgQGp1hBtmNLV9a5HEjJ/JJgN1XCAkxDVrlyY58QL5PeJra0IGYVtWMjs3DZ/Mf3kVRieSZGTtOuYoxNQOAYJXaEqcCDVDvBFbMS0jgSJzk5nrtIeTGUfJjstkSW2TJ2kZWEW6jIB4z7/AON4X8BRtfhyji2QnOdI3OQfYfSdVa384nVg2LZFQYAUDtvgRNeXJXO+ImbwjvwfY3QntIbpyBnv/PSJqPVW4XJPc5/zJhdavyt5v7/XMhwbR0qaTJq1djuOfXfG0it+pk7EZOw/Y9/vDfhakOR2+sreSG3Pf159/SK4UUUkyz/1P17fPf0kyOSIv6fRJw3PH027xlcqVXbabg2rFc0nRInH+MyQOPlFIu8Hj7YkyXYOwO3pF6DTH1sue0V+MggtHDLknAGxbuP2+cbdKGRK/wDiA2ERckZJJ2ONsckcTtxx9tnn55dmaULVWg1905e0ZikFO06egW4BiynXR5/J2Vz+iHaC1rQjtLVS6W5OcQ0dGLDBxEWWvIbbM9dI06b1Z0wp3EsJ8JAtktCU8LUhy33lJZoNUOLLy6Wrpx7QgUNo3odHt17iHpStx3ElHPFaFpmZIdp1SbtCLm30sQODuPlBU2bEqmmrQ9E9TiC1NjCq7YxBKhhiA5Z54jTljPlEogronpnMMsqoDjIyPnj7wRFwJ6jd4j2GJt/SKyNQQrxpg99bBuB9pWvBnWAyGnq3HA747kZ7S9WCBl3I+uY0o2dON0il9WsKlO2q1EJUqORvjtkSiU6zFnDPU1A+VjUbSMHlwQdQKjgYycT9CU6KFSpAZSMEbEEHmJrHwbZLULrRDHnSWLKN8/lJxHikkCTvZV/BVK7qK6kFkBAFRgQDtuVJHmGMD6R3c+EnLhgwPqDt/YS1dVv1t6ZYJgDYYwFyeB7byq2njdGL+YAoxDakOBgZ2weMd4s4JspjnJLQ0e2NumdOwG+JlfW/FdVqznWKQAOnys+rBGFAXYeuT6TbOk9TpXNMFcEED3BB4I9pUfEH4b0qlT4lJxTzypXUmexGCCDGjBL8CSm266ZXvCvXHrqyVUBbCkEZyQc5yDxggyx29oc8YjHw34Qp2wZ9ZqOwALEAAAZ2UD5/2jR7YDcCRyYk3ZSGVpUR2FMrj0i/xnbFqOsDOk5jum20MubYNT0sM5EtGPto58krZhbdVQcLn6GTU+sbeVDn5R91XpNOi5yAATkRXW6jQT0nnyTUmmiAMLyu3CYnop3DcuBOH6+CPLiCt1F27zLHJ+AXQTUoOPzVDIKlRQN3P7wSpULd4LWt+8p6HyzciSteIPU/Uz6xvUc4MTXFcA4nCL3EqsEQ3ofXaawONQ4Pr8/QxFcKVbeHU7sqQG3WTX1AVBkHzDg+slC4On0YVu+YOZ2yEbGcIN50pGPHG0kpie1F4nhbAhvQx7VftOlXafWtuznMZigijeTlJR0YI8GZW5Q4JycbZ7jnbn6zW0utB0sPkTvKR4Bt1evkDZVJz85d76lq2P7+krH3RspBtHQ6vv5iAB3OwHvGlpeLp7+uRzKbfU9YYcZAUD0Gc/4EqfVup3VsuFdiO2w8o7D5f/mwzlotWUa0aj4vqJWtKiMRuuQSARkHK7d9wJiVO4Ks1M08atQZVGAQw0njjkyRPEF1VY/6jadsjAwD2HH8zOLq9qhlXII5IKrg8Ab4yOOx7R+0Kk/BtH4cIFt8liST35VQMKucfzMtlyQRMR6d4yq2yqWQEHAVFyCTk68E7AAFf3lz6d4uqV0DUqJAPJdsY/bk/b3iuqoLT5FnqXQTbV9D/iePdBhkHf5xCtuztrc5Y/t9B2jO2tfWIk2FtINscswzxHrDaKrZMYxGbNtKpUiUnbM+/EawLUS67Fd9piVbJPmz9Z+kPEFDXScexmF3XTgXYehMSenZKWnYpoZ2AMeW1tkbmJjblH34hdfqIC4Bk2IxhX0p3g9zdZXaImuWJyTJra6zsZnENMiuk1HM5ptiMAgbOIvuKZU4M0XehldEjHMmpVSB8oSvSGH5mn39GBsN5Bzg9JjEFyocZHMDpjB3lgtbYDmB9WsP1LBDIr4gWhTcP5tp6gHeCsSOZ6hzzOrjoL2xjTuuyyMsXafUU2hNvT32kdJ6DFLtl/8Aw3UAue+APeXS5HMpn4eIy/EzwcYlxrEzoh+1Dp3sVVqJMVX9hrBVhvvj39pYgmdpzUUCBxvY8ZGYWDJY3BW4pE0nIw2/lAzkgfq5G2Rx7y2ihYM61BURkIJ8p1Nt20jfPtGN9To1F0VEBHuN/SKrLoVsjZRjj/l1+X6gbn6mPGVDRm1qju36al7V1qmm2p5VARhnYnzM+Rn9I24xj1Ms1vSVfIg4224n1G4XQEXZR6Qm2pavaLJcmDl5YVb04wpJIaVPG0JQR0qJyJ0EKd9oMpnlZ9oQMGuPMpHrMf8AEFuaddhjAJzNfpHJmffida6U+IvIizjaJSVlLv6YZZVnOGxDf+KMw04i6op1ZMlFNdipUTMuRtOKKEQ60QGd1bfENjWR27EEGGaA7QemN8QlqgTeI+9CtvwT1LtPXMjS/WD0+lszc4EIbovo0l6Cqi/CRDcdRP6YK/UXbYx5ToUygVxhhtmKH6WTUCJuD9pSOGKV0O8LSUu0LK65M8RY36x0wUlDE78YiqmZTdUK406DabAYzLPYW6FQQQTKLcVs7R54bRic6torhStksj1SNO8L4Af6Ru9ffEqnRLrS+n1jt6seL9o2N3EYo2eBx3gtRuTPaVc/SfVGzGKoC06jxJ6NmPQTtKeO0MpqNpgs6pUAIyoKfpIqSDH+YSiYhQrYUhkiyBDvJxgRgEmrAgd3dADHedXdwFUseAMyvWt58RtXaBs1WWOzG0rP4gW2ugQBmWW2O0UeLc/BbHpNehJLRjNl04DkSK7tlzG9swOYur2TO+3E5XPVkLFq+Q+0NVgwjSp09dABG8EFjpBMEZ2axYDvBr5y0m+INRE8NIs2BCnUhk6DqnUSDsILVv3+kIFo2SHUg9sDP3EleggdEDaiefQQRikrOlRddglu6nlyG+0cdJudBJxrP6cRdRuKIGkjvyBJk0DBRsH+do8ZUdMYLjfJfg76hcFqi/FUYzx6SfqFnTKfpG2RieVn1phULP3b3ie4qhCNY1kcjOPpKtonKkJ1tXZiFUnfnEtPRrXQu/MMsOq0lTIp4MTX/V2d8gaR7QSXJVZzTjFrTLVZ1AGBzLCrggEd5l9Pqby/eHqxeipiwTWhcSrQ5FSdI2TIShnqPiUOhDJBJqPtAqdcfWd06sxhsjiTq+dhFaVvWGW7Q2IMKRxJwMwegcwtFhMUj8ROovSpoq5w7YJgHhe5JAEsX4i9L+LaMQMtTw4+nMqPhKoSBtFfYEaZaHKwHxJQLUXHsYXYPtC7mmGQj2jIzPzwt6EdkbsTJqHUgr+0a+JPDmqs5G2+doNa9A8u/M4cihbRB0HXNwmjVmJ6t2GUgSDqFF08uSRAadFs7bTQhSuwqNqyB6JDZMc9OK5956eluy5yPlOuj9OOTnMaUk0K3oDtOp52DHfbmd0TTLqxJTG+ORn0iKxqFXBUZ9R7RnfWxCM5PDAAexlHDi6OuN8bF7ghiCMbxla0cedjjA2nlKsWp5UAlOcj9J7/AEkD02YAmZ9gWnZZ+m9QqKm1IN6MO8ETpi3Du9QaHz+XONp703qTIgTsOIPc1WZ9efY4j9qyjdq2e9Q6cKaZUn5GJShPaM690W8ucierS0jJElypnJJpvQnZcczQPBdUtTKkbA7GZ3f1PNLP4K6swbQTsZaPVhj2aMKW0hehjeT0Km07cRi6FFWpp5kP/GFU77wm+SV+rSy4HvFbCPaPU8nJ2EsVnWyAfWUp0wymW/pVTKgEdoUwMd0I0oLFtu2CIypPGQjJrikGUqdwRiZfa23wbl6Y2UNkfIzU1aUbxLQCXKv2cY+omfRl2O7B9o0QkxP09thHNPeBMNGdeL2KVMjgxDSvQRzND8adI10SwG43/aYs4fUQp295x5sTctEZRbkWSlbq5y2Iq6xaFTlIutrx1cKTtnBliuQpQMDvItZMbW7NTQH0C4Y7PLZaWqSjWlxofPaPrbri6wuZpKSldE5RaZR7fpbZyTiPDYqtLQzglmGcn0ht/wBOLtqTIxvtxFq2LMzE5GfrO/Imd0I8bHdh0RE43yMH3BhVx0dNA07EfzBknSgEQF9zDbi4BUjAAIhpGUWV1elY44/eQ3nT10kJnPfHMPd9GdJP89YPSumzq0Z9SOCJujONFWRWDYU5PvOr03GN1wPXIja5AepgKF9T3hGAUKFskesGkTeNFRWln8xjfw+UWqozjeKbmmVcjPeGdKtGLqwHcQ19ipGu0E22OYTnaD2CnQvyEMCQ2USFVyM5idkGsZljukGJVutVGRda8iJdsYn6hUCAt6QroHVGdRiUe5v6jjBMsXgmoFBQnfMYVO2aVbVciNrYxTYqCBGdBT9IyFGCiUX8RnZPhVRwpwR85eVEr3jnphrWzaeV83zxBJ6dGaF3h7rSOoBG8ttsczG+n9Q+DhsbjkS32HjVTyCJHFkcl7lRls0CrSDKVPBmR+LfD60quU2DZyJam8aJnCgmI+r9R+OwfGMSzaaoyjsrf/BwRvzOqXSfWNKbSZZB2ilRYmfo6k8Ss9Yt/huMbTRlEo3jFMNmMnYJRVFmsLhdGDAatQKxMFtbgCc1nZu20rOetDt1sKS8XPM6evqGO0WuwXnEW3PWFQkDf5SKySk6onzbexxWqaPNjUO47Qar1ncaUAGd8ekRP11m2Akto7E+bgx5NxiZ5KVIedVNMoHQ4J+3sYmtHbnvCq1Nf+YT1imBjkRFkcqpC8m2B1bXUc9+Yys30gZG8gNSfUXBYZPeVoLNT6M+tFbHaM2o5kPQlX4S+mBD3X0haMmKK9rKp4mtvIcS71E9ZWPFlPShYnbECiFyM5UQ7pFQhxg8xMzmd218UYH0i0wWbT0Z20jJlit3MpvhW5aoit6j9pcrVcYyY1BsOpnM7uaeUYexnKv6YGxJJ4AHJP2gdp1yk9M1Az6F05LUatLIqHCldYGr6Z+8ZIVyMuuLcK7ADuZJSoDjTvLVcdHof1PwDVdatQfEFNaLsFRiQC7gaV3VuSPr3W1rJES4q/E1rQqrQUqNndigK8/pNRQcZ3VvSc7hK+iinGhUiBTxCXpLzmNKvTAattQBOusnxH2HkXYgc7nAf/6Ti16fSZa9RqrLSoVGpkrTZ3OlyhYKuTp1A8A8H0jcZXo3KIrCDO28b2HRq1RQUpnSeGJVQflk7j3AxALOn8SoBbo1VdRKioDTLqnJYNgqp9wDj5xx4f8A6iveipXqH/T1j4dN2WgujNMroVyHOpty2d1xtiMor+QHJro+Hhm4x+QZ/wDUv+8zPx/QdH0uhVgdwf35GxHuJ+jpi/4vVVqXaoAP9OkgY99Ts7aT8l0n/wB8ZxUdicnLRUKFkyAajmPumIpIBEE6heojFM5xtnsfkYXZ74YCFLdnWkqosNTpFNk3AmceLOnoh8uAcy+rfHGMSj+LqGo6lbjtHaZKcdFTTYxtbhmXAhXQPDrVCHcYT0PLf9paT05FAAXHyk5tMlGLKpS6e54Ma21HQuHTUY4pUMHCrDbe0LuqYwTz7AcycpRitsdLjsrNS1yAdBUE4z2PrPk6d3mk9Ys1/psIv5Nxj7ynsvsYmHMsitCpqWw3pfiZ6QCOpKgYyI1peNaZJXJGO5BwZXGTPAnJs8njaW5fJqHF/wCMlGyIXJ7jiJeu9fe4QIE0juZ01p6L9p4tkS2OPeGzUVl7QwerYmXIdLbO2+O/aFJ0n/mwPT0+8Fm4izwD1Nqbmm7nScYHvNR/rfMBnkZx3mcP0BXO2QwOQwI2hNTplyXWoLjzAaR5dvrGsFM0XqVyz03pojs1Vfh610AIrnS7sWYH8pJGAfyzvqjazToqh+HrSo9QlAgSkCyJ+bUTrSn2xgneU2ncXYQKaiAd2Ckk47YzsITXpPUwHrvjHmGFVft2m5G42T9XvrWpVqO9G91tpBNJ6aqQgwoBFQHTyd+7GD9NrJ/Rpbva1iFc1NNBqeNWk4Vy7KdtR3x+kGS7IAFdcAYyUOD+0gudsYYZ/wCnYRHN2NwQwbrmahr07aoLpqa0/wDUqU/6engHuDrYKWfhcnJ4zkD290ltQqUqdGvVqPT+EzM1FaTNpOXJ1agMsx4J3O0gpprwdQGDjIO49zt957WohTyD7j/eSlnp9DLEmuxr4VPwxcVmBY06WQoGWbOpmCjkk6AMe8YeALF0pM1QEOQqsSCCW3d2wfVnP7RBZ3JVtSuyMBjWunPywwII9iPvgxhT6pdn/wAwB/8ACn+8fHOMkr8Cyg1dF4r1VRWZiFVQSSTgADcknsJgPiG7+NXqV8HFV2cZGDo2SnkHg6FTaXjraVKoUV671E2b4elEpkjguEGW33wxI9pRepuGqsM8HEX9RPVIlKLSP//Z"
//class가 modal-sindow인 div요소 의 class 명을 modal-window hide로 변경
const mdc=document.querySelector(".modal-window");
mdc.className="modal-window hide";
//세번째 사진 변경          //querySelectorAll로 가져오면 배열로 저장됨 거기서 index로 접근가능.!!
const photoitem=document.querySelectorAll(".photo-card img")[2];
photoitem.src='dog.png';

const photoName=document.querySelectorAll('.photo-name')[4];
photoName.innerText="나도 화남";

