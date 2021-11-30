let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)           

    let mainDiv = document.createElement('div')
    mainDiv.setAttribute('class','dog-content')


        let img = document.createElement('img')
        img.setAttribute('class','dog-image')
        img.setAttribute('src','./assets/rizzo.jpg')
        mainDiv.append(img)

        let div_l2 = document.createElement('div')
        div_l2.setAttribute('class','dog-details')

            let descr = document.createElement('h3')
            descr.textContent = "Description:"
            div_l2.append(descr)

            let descr_content = document.createElement('p')
            descr_content.textContent = "This gentle dog is aloof toward her owner, and never comes "
            descr_content.textContent += "when called.  She always acts as though any stranger she"
            descr_content.textContent += " meets will harm her, and dislikes other animals."
            div_l2.append(descr_content)

            let feeding_hdr = document.createElement('h3')
            feeding_hdr.textContent = "Feeding Times:"
            div_l2.append(feeding_hdr)

            let unnum_list = document.createElement('ul')

                let time1 = document.createElement('li')
                time1.textContent = '9:00 am'
                unnum_list.append(time1)

                let time2 = document.createElement('li')
                time2.textContent = '12:00 pm'
                unnum_list.append(time2)

                let time3 = document.createElement('li')
                time3.textContent = '5:00 pm'
                unnum_list.append(time3)
                
            div_l2.append(unnum_list)


        mainDiv.append(div_l2)
        
content.append(mainDiv)