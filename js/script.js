const arrayModel = [
    {
        'id' : 0,
        'bases': [0,1],
        'header' : 'ОПРЫСКИВАТЕЛЬ-РАЗБРАСЫВАТЕЛЬ САМОХОДНЫЙ ТУМАН-1M',
        'price' : 2997120,
        'description' : 'Шасси,  двигатель, кабина с угольным фильтром и отопителем салона, кондиционер, пневмоподвеска, разбрасыватель минеральных удобрений (гидравлический привод), шинооболочки (в комплекте 6 шт.), транспортные колеса (в комплекте 6 шт.), навигационная система СН-1 «АТЛАС 730» с усиленной антенной',
        'image' : 'img/image-tuman1.jpg',
        'options': [8,9,10,11],
        'images': ['img/model0/image0.jpg','img/model0/image1.jpg','img/model0/image2.jpg','img/model0/image3.jpg','img/model0/image4.jpg','img/model0/image5.jpg'],
        'videos': ['video/video.mp4']
    },
    {
        'id' : 1,
        'bases': [2,3,4,5],
        'header' : 'ОПРЫСКИВАТЕЛЬ-РАЗБРАСЫВАТЕЛЬ САМОХОДНЫЙ ТУМАН-2М',
        'price' : 8283840,
        'description' : 'Гидравлический привод хим.насоса, штанговый опрыскиватель, узкие  колеса, шины низкого давления, подсветка зоны распыления, автоматическая лесенка',
        'image' : 'img/image-tuman2.jpg',
        'options':[0,1,3,4,5,6,7],
        'images': ['img/model1/image0.jpg','img/model1/image1.jpg','img/model1/image2.jpg','img/model1/image3.jpg','img/model1/image4.jpg','img/model1/image5.jpg'],
        'videos': ['video/video.mp4']
    },
    {
        'id' : 2,
        'bases': [6,7,8,9],
        'header' : 'САМОХОДНЫЙ ОПРЫСКИВАТЕЛЬ ТУМАН-3',
        'price' : 10550400,
        'description' : 'Штанговый опрыскиватель, узкие колеса, шины низкого давления,гидравлический привод хим.насоса, автоматическая лесенка, подсветка зоны распыления,Навигационная система с автоматическим отключением секций',
        'image' : 'img/image-tuman3.jpg',
        'options':[0,1,2,3,4,5],
        'images': ['img/model2/image0.jpg','img/model2/image1.jpg','img/model2/image2.jpg','img/model2/image3.jpg','img/model2/image4.jpg','img/model2/image5.jpg'],
        'videos': ['video/video.mp4']
    }
]
 
const optionsSprayer = [
    {
        'id': 0,
        'name': 'Мультиинжектор',
        'price': 4263840 ,
        'description': ''
    },
    {
        'id': 1,
        'name': 'Встряхиватель вибрационный',
        'price': 115200 
    },
    {
        'id': 2,
        'name': 'Увеличитель клиренса 800 мм',
        'price': 607200,
        'cancellation': [1,5]
    },
    {
        'id': 3,
        'name': 'Ручной газ',
        'price': 88800
    },
    {
        'id': 4,
        'name': 'Заправочная помпа HYPRO (757 л/мин)',
        'price': 139200
    },
    {
        'id': 5,
        'name': 'Переходники для увеличения колеи до 2250 мм. (комплект 6шт)',
        'price': 156240
    },
    {
        'id': 6,
        'name': 'Увеличитель дорожного просвета 800 мм',
        'price': 607200
    },
    {
        'id': 7,
        'name': 'Система низкой штанги (Телескопические гидроцилиндры для опускания штанг до 50 см.) (комплект 2шт)',
        'price': 102000
    },
    {
        'id': 8,
        'name': 'Шины низкого давления (в комплекте 6 шт.)',
        'price': 528480,
        'cancellation': [1,9]
    },
    {
        'id': 9,
        'name': 'Колесо в сборе',
        'price': 51600  
    },
    {
        'id': 10,
        'name': 'Шинооболочка 1300х530х533',
        'price': 34800,
        'cancellation': [1,5]
    },
    {
        'id': 11,
        'name': 'Оснастка для монтажа шинооболочек',
        'price': 34800 
    },
]

const arrayBase = [
    {
        'id' : 0,
        'name' : 'Самоходный опрыскиватель-разбрасыватель «Туман-1М»',
        'price' : 4227840,
        'description' : 'Шасси,  двигатель ВАЗ 2123 (инжектор) - кабина с угольным фильтром и отопителем салона - кондиционер - пневмоподвеска Штанговый опрыскиватель - трёхпозиционные распылители (три комплекта распылителей) - компьютерное регулирование расхода рабочей жидкости Шинооболочки (в комплекте 6 шт.) Шины низкого давления (в комплекте 6 шт.) Транспортные колеса (в комплекте 6 шт.) Разбрасыватель минеральных удобрений (гидравлический привод) Навигационная система СН-1 «АТЛАС 730» с усиленной антенной'
    },
    {
        'id' : 1,
        'name' : 'Самоходный разбрасыватель «Туман-1М»',
        'price' : 2997120,
        'description' : 'Шасси,  двигатель, кабина с угольным фильтром и отопителем салона ,кондиционер, пневмоподвеска, разбрасыватель минеральных удобрений (гидравлический привод), шинооболочки (в комплекте 6 шт.), транспортные колеса (в комплекте 6 шт.), навигационная система СН-1 «АТЛАС 730» с усиленной антенной'
    },
    {
        'id' : 2,
        'name' : 'Самоходный опрыскиватель «Туман-2м»',
        'price' : 8283840 ,
        'description' : 'Гидравлический привод хим.насоса, штанговый опрыскиватель, узкие  колеса, шины низкого давления, подсветка зоны распыления, автоматическая лесенка, Навигационная система с автоматическим отключением секций'
    },
    {
        'id' : 3,
        'name' : 'Самоходный опрыскиватель «Туман-2м»+',
        'price' : 9007680  ,
        'description' : 'Гидравлический привод хим.насоса, штанговый опрыскиватель, узкие  колеса, шины низкого давления, подсветка зоны распыления,  автоматическая лесенка ,Навигационная система с электромеханическим подруливающим устройством'
    },
    {
        'id' : 4,
        'name' : 'Самоходный опрыскиватель-разбрасыватель «Туман-2м»',
        'price' : 9262080  ,
        'description' : 'Гидравлический привод хим.насоса и разбрасывателя, штанговый опрыскиватель, разбрасыватель, узкие  колеса, шины низкого давления, подсветка зоны распыления, автоматическая лесенка, Навигационная система с автоматическим отключением секций'
    },
    {
        'id' : 5,
        'name' : 'Самоходный опрыскиватель-разбрасыватель «Туман-2м»+',
        'price' : 9985920  ,
        'description' : 'Гидравлический привод хим.насоса и разбрасывателя, штанговый опрыскиватель, разбрасыватель, узкие  колеса, шины низкого давления, подсветка зоны распыления, автоматическая лесенка, Навигационная система с электромеханическим подруливающим устройством'
    },
    {
        'id' : 6,
        'name' : 'Самоходный опрыскиватель «Туман-3»',
        'price' : 10550400   ,
        'description' : 'Штанговый опрыскиватель, узкие колеса, шины низкого давления,гидравлический привод хим.насоса, автоматическая лесенка, подсветка зоны распыления,Навигационная система с автоматическим отключением секций'
    },
    {
        'id' : 7,
        'name' : 'Самоходный опрыскиватель «Туман-3»+',
        'price' : 11273280   ,
        'description' : 'Штанговый опрыскиватель, узкие колеса, шины низкого давления, гидравлический привод хим.насоса, автоматическая лесенка, подсветка зоны распыления Навигационная система с электромеханическим подруливающим устройством'
    },
    {
        'id' : 8,
        'name' : 'Самоходный опрыскиватель-разбрасыватель «Туман-3»',
        'price' : 11216640   ,
        'description' : 'Штанговый опрыскиватель, разбрасыватель, узкие колеса, шины низкого давления, гидравлический привод хим.насоса и разбрасывателя,  автоматическая лесенка,  подсветка зоны распыления, Навигационная система с автоматическим отключением секций'
    },
    {
        'id' : 9,
        'name' : 'Самоходный опрыскиватель-разбрасыватель «Туман-3»+',
        'price' : 11940480   ,
        'description' : 'Штанговый опрыскиватель, разбрасыватель, узкие колеса, шины низкого давления, гидравлический привод хим.насоса и разбрасывателя,  автоматическая лесенка, подсветка зоны распыления, Навигационная система с электромеханическим подруливающим устройством'
    },

]

/*-----------------------------------------------------------------*/
let personName = "Артем Дьяченко"
const buttonFromList = $('.first-page__link')
const buttonModel = $('.model-list__item')
let openId

buttonFromList.click(function(item){
    console.log('выбираешь')
    const attr = $(item.target).attr('id')
    console.log(attr)
    $(`.first-page__link`).removeClass('active-item')
    $(`.first-page__link[id=${attr}]`).toggleClass('active-item')
    const modelList = $(`.first-page__model-list[id=${attr}]`)
    $('.first-page__model-list').addClass('hidden')
    modelList.toggleClass('hidden')  
})

choiceAndRenderModel()
let cardItem = ''
let optionsItem = ''
const main = $('.main')
const body = $('body')
let outDiv = $('.out')
const optionsDiv = $('.options')
const firstPage = $('.first-page')
let mainPrice = 0
const arrayOpenOption = []

function choiceAndRenderModel() {
    $('.model-list__item').click(function(item) {
        const attr = $(item.target).attr('id')
        openId = attr
        outDiv.removeClass('hidden')
        optionsDiv.removeClass('hidden')
        renderModel(attr) 
        renderOptions(attr)
        firstPage.remove()
    })
}

function renderModel(attr){ //ID соответствующий id нужной модели в массиве моделей
    console.log("renderModel")
    
    arrayModel.forEach ((item) => {
        console.log(openId)
        if (item.id == attr) {
            mainPrice = item.price
            cardItem =
            `

            <div class="info__card ">
                <img src="${item.image}" class="info__image" alt="info">
                <div class="info__content">
                    <p class="info__title">${item.header}</p>
                    <p class="info__description">${item.description}</p>
                    <p class="info__price">Цена: ${prettify(item.price)}<span>₽</span></p>
                </div>
                <div class="info__list-button">
                    <p class="info__button info__button-photo" href="index.html">Фото</p>
                    <p class="info__button info__button-video" href="index.html">Видео</p>
                    <p class="info__button info__button-characteristic" href="index.html">Характеристики</p>
                    <p class="info__button info__button-reviews" href="index.html">Отзывы</p>
                </div>
                <a class="info__button-menu" href="index.html">Назад</a>
            </div>

            `
            outDiv.append(cardItem)
        }
    })
}

function renderOptions(model){ //id модели по которой кликнули
    optionsDiv.empty()

    baseItem =
    `
    <h1>База:</h1>
    `

    arrayModel[model].bases.forEach((baseArr)=>{
        arrayBase.forEach((base) => {
            if (baseArr==base.id){
                baseItem += 
                `

                <div class="base__card " id="${base.id}">
                    <div class="baseList" id="${base.id}">
                        <p class="baseList__title">${base.name}</p>
                        <p class="baseList__p">Цена: <span class="baseList__price">${prettify(base.price)}</span><span>₽</span></p>
                        <button class="baseList__button" id="${base.id}">Добавить</button>
                        <img src="img/i.png" class="baseList__info" alt="info" id="${base.id}">
                    </div>
                </div>

                `
            }
        })
    })

    optionsItem = 
    `
    <h1>Опции:</h1>
    `

    arrayModel[model].options.forEach((optionArr)=>{
        optionsSprayer.forEach((option) => {
            if (optionArr==option.id){
                optionsItem += 
                `

                <div class="options__card " id="${option.id}">
                    <div class="optionsList" id="${option.id}">
                        <p class="optionsList__title">${option.name}</p>
                        <p class="optionsList__p">Цена: <span class="optionsList__price">${prettify(option.price)}</span><span>₽</span></p>
                        <button class="optionsList__button" id="${option.id}">Добавить</button>
                        <img src="img/i.png" class="optionsList__info" alt="info" id="${option.id}">
                    </div>
                </div>

                `
            }
        })
    })

    optionsItem += 
    `
    <img src="img/line.jpg" class="options__line" alt="info">
    <div style="display: flex" class="total"> 
        Итоговая цена:ㅤ<p class="total__price"> ${prettify(mainPrice)}</p><span>₽</span>    
    </div>
    <div class="configure-btn">Конфигурировать</div>
    
    `
    optionsDiv.prepend(baseItem)
    optionsDiv.append(optionsItem)
    choiceOption()
}

function choiceOption(){
    console.log('choiceOption')
    $('.optionsList__button').click((item)=>{
        const attr = $(item.target).attr('id')
        const optionBtn = $(`.optionsList__button[id=${attr}]`)
        const optionList = $(`.optionsList[id=${attr}]`)
        if (optionList.hasClass('cancellation')){
            return
        } else {
            if(optionList.hasClass('true')) {
                deleteOption(item)
                return
            } else {
                addOption(item)
            } 
        }
    })
    $(`.optionsList__info`).click((click) => {
        const attr = $(click.target).attr('id')
        optionsSprayer.forEach((option)=>{
            if(option.id==attr){
                main.append(
                `
                    <div class="background"></div>
                    <div class="popUp">
                        <img src="img/cross.png" alt="cross" class="popUp__cross">
                        <h1 class="popUp__title">${option.name}</h1>
                    </div>
                `
                )
                $('.popUp__cross').click(()=>{
                    $('.popUp').remove()
                    $('.background').remove()
                })
                $('.background').click(()=>{
                    $('.popUp').remove()
                    $('.background').remove()
                })
                $('.popUp').ready(function() {
                    $('.popUp').animate({
                        opacity: 1,
                    }, 1000);
                });
            }
        })
        
    })
    $('.baseList__button').click((item)=>{
        const attr = $(item.target).attr('id')
        const basenBtn = $(`.baseList__button[id=${attr}]`)
        const baseList = $(`.baseList[id=${attr}]`)
        if (baseList.hasClass('cancellation')){
            return
        } else {
            if(baseList.hasClass('true')) {
                deleteBase(item)
                return
            } else {
                addBase(item)
            } 
        }
    })
    $(`.baseList__info`).click((click) => {
        const attr = $(click.target).attr('id')
        arrayBase.forEach((base)=>{
            if(base.id==attr){
                main.append(
                `
                    <div class="background"></div>    
                    <div class="popUp">
                        <img src="img/cross.png" alt="cross" class="popUp__cross">
                        <h1 class="popUp__title">${base.name}</h1>
                        <p class="popUp__description">${base.description}</p>
                    </div>
                `
                )
                $('.popUp__cross').click(()=>{
                    $('.popUp').remove()
                    $('.background').remove()
                })
                $('.background').click(()=>{
                    $('.popUp').remove()
                    $('.background').remove()
                })
                $('.popUp').ready(function() {
                    $('.popUp').animate({
                        opacity: 1,
                    }, 1000);
                });
            }
        })
        
    })
    listenButton()
    
}

function addOption(button){  //кнопка на которую нажали
    
    console.log("addOption")
    
    const attr = $(button.target).attr('id')
    const optionList = $(`.optionsList[id=${attr}]`)
    optionList.addClass('true')
    
    optionsSprayer.forEach((i) => {
        if (i.id == attr) {
            let price = Number($('.total__price').text().replace(/ /g,''))
            let totalPrice = price+i.price
           arrayOpenOption.push(attr)
            $(`.optionsList__button[id=${i.id}]`).text('Удалить')
            if (i.cancellation){
                i.cancellation.forEach((cancellationID) => {
                    if($(`.optionsList[id=${cancellationID}]`).hasClass('true')){
                        const deletePrice = $(`.optionsList[id=${cancellationID}] .optionsList__price`).text().replace(/ /g,'')
                        totalPrice = totalPrice - deletePrice

                    }
                    $(`.optionsList[id=${cancellationID}]`).addClass('cancellation').removeClass('true')
                    $(`.optionsList[id=${cancellationID}] .optionsList__button`).text('Невозможно')
                    $(`.options__card[id=${cancellationID}]`).append(
                        `
                        <div class="options__card__cancellation">
                            <div class="options__card__content">
                                <img src="img/error.svg" alt="error">
                                <p class="cancellation__text">Невозможно добавить, потому что выбрано:</p>
                            </div>
                            <p class="cancellation__error">${$(`.optionsList[id=${i.id}] .optionsList__title`).text()}</p>
                        </div>
                        `
                    )
                })
            }
            
            
            $('.total__price').text(prettify(totalPrice))
        }
    })
    
}

function deleteOption(button) { //кнопка на которую нажали
    console.log('delete')
    const attr = $(button.target).attr('id')
    const optionList = $(`.optionsList[id=${attr}]`)
    optionList.removeClass('true')
    optionsSprayer.forEach((i) => {
        if (i.id == attr) {
            let price = Number($('.total__price').text().replace(/ /g,''))
            const totalPrice = price-i.price
            $('.total__price').text(prettify(totalPrice))
            $(`.optionsList__button[id=${i.id}]`).text('Добавить')
            if (i.cancellation){
                i.cancellation.forEach((cancellationID) => {
                    if($(`.optionsList[id=${cancellationID}]`).hasClass('true')){
                        mainPrice -= Number($(`.optionsList[id=${cancellationID} .optionsList__price]`).text().replace(/ /g,''))
                    }
                    $(`.optionsList[id=${cancellationID}]`).removeClass('cancellation').removeClass('true')
                    $(`.optionsList[id=${cancellationID}] .optionsList__button`).text('Добавить')
                    $(`.options__card[id=${cancellationID}] .options__card__cancellation`).remove()
                })
            }
        }
    })
}

function prettify (num) {
    var n = num.toString();
    var separator = " ";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
}

function listenButton(){
    let galleryItem = ""
    $('.info__button-photo').click((click)=>{
        
        galleryItem = ""
        arrayModel[openId].images.forEach((image)=>{
            console.log(image)
            galleryItem += 
            `
            <img src="${image}" alt="image" class="popUp__item ">
            `
        })
        main.append(
        `
            <div class="background"></div>
            
            <div class="popUp">
                <img src="img/cross.png" alt="cross" class="popUp__cross">
                <h1 class="popUp__title">ФОТО: ${arrayModel[openId].header}</h1>
                <div class="popUp__gallery">
                ${galleryItem}
                </div>
                
            </div>
        `
        )
        $('.popUp__cross').click(()=>{
            $('.popUp').remove()
            $('.background').remove()
        })
        $('.background').click(()=>{
            $('.popUp').remove()
            $('.background').remove()
        })
        $('.popUp').ready(function() {
            $('.popUp').animate({
                opacity: 1,
            }, 1000);
        });
        $('.popUp__gallery img').click((img)=>{
            console.log(img)
            const path = $(img.target).attr('src')
            body.prepend(
                `
                <div class='bigImage'>
                    <div class="backgroundBI"></div>
                    <img src="img/cross.png" alt="cross" class="bigImage__cross">
                        <div class="bigImage__container">
                            <img src="${path}" alt="image" class="bigImage__image">
                        </div>
                </div>
                `
            )
            $('.bigImage__cross').click(()=>{
                $('.bigImage').remove()
            })
            $('.backgroundBI').click(()=>{
                $('.bigImage').remove()
            })
        })
    })
    $('.info__button-video').click(()=>{

        galleryItem = ""

        arrayModel[openId].videos.forEach((video)=>{
            galleryItem += 
            `
            <video controls src="${video}" alt="image" class="popUp__videoitem "></video>
            `
        })

        main.append(
        `
            <div class="background"></div>
            <div class="popUp ">
                <img src="img/cross.png" alt="cross" class="popUp__cross">
                <h1 class="popUp__title ">ВИДЕО: ${arrayModel[openId].header}</h1>
                <div class="popUp__gallery popUp__video-container ">
                ${galleryItem}
                </div>
            </div>
        `
        )  

        $('.popUp__cross').click(()=>{
            $('.popUp').remove()
            $('.background').remove()
        })

        $('.background').click(()=>{
            $('.popUp').remove()
            $('.background').remove()
        })
        $('.popUp').ready(function() {
            $('.popUp').animate({
                opacity: 1,
            }, 1000);
        });
    })
    $('.info__button-reviews').click(()=>{
        galleryItem = ""
        arrayModel[openId].videos.forEach((video)=>{
            galleryItem += 
            `
            <video controls src="${video}" alt="image" class="popUp__videoitem "></video>
            `
        })
        main.append(
        `
            <div class="background"></div>
            <div class="popUp  ">
                <img src="img/cross.png" alt="cross" class="popUp__cross">
                <h1 class="popUp__title ">ОТЗЫВЫ: ${arrayModel[openId].header}</h1>
                <div class="popUp__gallery popUp__video-container ">
                ${galleryItem}
                </div>
            </div>
        `
        )  
        $('.popUp__cross').click(()=>{
            $('.popUp').remove()
            $('.background').remove()
        })
        $('.background').click(()=>{
            $('.popUp').remove()
            $('.background').remove()
        })
        $('.popUp').ready(function() {
            $('.popUp').animate({
                opacity: 1,
            }, 1000);
        });
    })
    $('.info__button-characteristic').click(()=>{
        const model = arrayModel[openId]
        main.append(
            `
                <div class="background"></div>
                <div class="popUp">
                    <img src="img/cross.png" alt="cross" class="popUp__cross">
                    <h1 class="popUp__title">${model.header}</h1>
                    <p class="popUp__description"> Характеристика: </br>${model.description}</p>
                </div>
            `
            )
            $('.popUp__cross').click(()=>{
                $('.popUp').remove()
                $('.background').remove()
            })
            $('.background').click(()=>{
                $('.popUp').remove()
                $('.background').remove()
            })
            $('.popUp').ready(function() {
                $('.popUp').animate({
                    opacity: 1,
                }, 1000);
            });
    })
    $('.configure-btn').click(()=>{
        
        let choiceOptions = ""

         
        let docInfo = {

            info:{
                title:'Комерческое предложение от Агротехник',
                author:'Artem',
                subject:'ТЕМА',
                keywords:'КЛЮЧЕВЫЕ СЛОВА?'
            },
        
            pageSize:'A4',
            pageOrientation:'landscape',
            pageMargins:[50,50,30,60],
        
            header:'',
            footer:'',
        
            content:[
        
                {
                    image:`test`
                },
        
                {
                    text:`Отправлено от: ${personName}`,
                    fontsize:'20',
                    margin:[20, 20, 0, 0]
                },
        
                {
                    text:`Модель: ${arrayModel[openId].header}`,
                    fontsize:'20',
                    margin:[20, 20, 0, 0]
                },
                
            ],
        
            images:{
                test:'data:image/png;base64,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'
            }
            
        }
        pdfMake.createPdf(docInfo).open()
    })
    
    
}

function addBase(base){  //база на которую нажали
    
    console.log("addBase")

    const attr = $(base.target).attr('id')
    $(`.baseList`).addClass('cancellation')
    $(`.baseList__button`).addClass('cancellation').text('Невозможно')
    $(`.baseList__button[id=${attr}]`).removeClass('cancellation')
    $(`.baseList[id=${attr}]`).removeClass('cancellation')
    const baseList = $(`.baseList[id=${attr}]`)
    baseList.addClass('true')


    
    arrayBase.forEach((i) => {
        if (i.id == attr) {
            standartPrice = arrayModel[openId].price
            let price = Number($('.total__price').text().replace(/ /g,''))
            let totalPrice = price - arrayModel[openId].price + i.price
           
            $(`.baseList__button[id=${i.id}]`).text('Удалить')
            
            $('.total__price').text(prettify(totalPrice))
        }
    })
    
}

function deleteBase(base) { //кнопка на которую нажали
    console.log('delete')

    $(`.baseList__button`).text('Добавить')
    $(`.baseList`).removeClass('cancellation')
    const attr = $(base.target).attr('id')
    const baseList = $(`.baseList[id=${attr}]`)
    arrayBase.forEach((i) => {
        if (i.id == attr) {
            let price = Number($('.total__price').text().replace(/ /g,''))
            let selectedPrice =  Number($('.true .baseList__price').text().replace(/ /g,''))
            console.log(selectedPrice)
            const totalPrice = price - selectedPrice + arrayModel[openId].price
            $('.total__price').text(prettify(totalPrice))
            $(`.baseList__button[id=${i.id}]`).text('Добавить')
            baseList.removeClass('true')
        }
    
    })
}

