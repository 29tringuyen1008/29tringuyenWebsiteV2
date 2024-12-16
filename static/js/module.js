var domainname = '29tringuyen.000webhostapp.com'

function URL (chosenlink) {
    let currentLink = ''
    /*
    if (location.hostname === domainname) {
        //console.log("This is a domain")
        currentLink = domainname + chosenlink
    } else {
        //console.log("This is a private file")
        currentLink = 'D:/PreArchiveStorage/29_tringuyen%20Website/' + chosenlink
    }
    */

    if (window.location.protocol == "file:") {
        currentLink = 'D:/PreArchiveStorage/29_tringuyen%20Website/' + chosenlink //Bạn không thể nghĩ thêm về "D:/PreArchiveStorage/29_tringuyen%20Website/" :)
    }
    else {
        // console.log(window.location.protocol)
        currentLink = window.location.protocol + "//" + window.location.hostname + "/" + chosenlink
    }
    return currentLink
}

function GoToURL(chosenlink, comefrom) {
    if (comefrom == "parent") {
        window.parent.location.href = URL(chosenlink)
    } else {
        window.location.href = URL(chosenlink)
    }
    console.log(location.hostname)
    console.log(URL(chosenlink))
    
}

function LoadMenuBar() {
    const MenuBars = document.getElementsByClassName("Menu_Bar");
    const averagefontsize = "1.75vw"

    for (let i = 0; i < MenuBars.length; i++) {
        let unorderedlist1 = document.createElement("ul")
        unorderedlist1.style = ""
        MenuBars[i].appendChild(unorderedlist1)

        let li0 = document.createElement("li")
        let ent = document.createElement("a")
        ent.href = URL("index.html")
        ent.innerHTML = "Trang lối vào - Entrance Page"
        li0.style.fontSize = averagefontsize
        li0.appendChild(ent)
        unorderedlist1.appendChild(li0)

        let li1 = document.createElement("li")
        let main_page_link = document.createElement("a")
        main_page_link.href = URL("hub/main.html")
        main_page_link.innerHTML = "Trang chính - Main Page"
        li1.style.fontSize = averagefontsize
        li1.appendChild(main_page_link)
        unorderedlist1.appendChild(li1)

        let li2 = document.createElement("li")
        let twoninetn_link = document.createElement("a")
        twoninetn_link.href = URL("hub/About29tn.html")
        twoninetn_link.innerHTML = "29_tringuyen"
        li2.style.fontSize = averagefontsize
        li2.appendChild(twoninetn_link)
        unorderedlist1.appendChild(li2)

        let li3 = document.createElement("li")
        let blog_link = document.createElement("a")
        blog_link.href = URL("hub/blog.html")
        blog_link.innerHTML = "Blog"
        li3.style.fontSize = averagefontsize
        li3.appendChild(blog_link)
        unorderedlist1.appendChild(li3)

        let li4 = document.createElement("li")
        let contact_link = document.createElement("a")
        contact_link.href = URL("hub/lienhe.html")
        contact_link.innerHTML = "Contact - Liên hệ"
        li4.style.fontSize = averagefontsize
        li4.appendChild(contact_link)
        unorderedlist1.appendChild(li4)

        let li5 = document.createElement("li")
        let timelink = document.createElement("a")
        timelink.href = URL("hub/time.html")
        timelink.innerHTML = "Time - Thời Gian"
        li5.style.fontSize = averagefontsize
        li5.appendChild(timelink)
        unorderedlist1.appendChild(li5)

        MenuBars[i].appendChild(document.createElement("hr"))

        let unorderedlist2 = document.createElement("ul")
        MenuBars[i].appendChild(unorderedlist2)

        let li2_1 = document.createElement("li")
        let liblink = document.createElement("a")
        liblink.href = URL("sections/29tringuyenArchiveCategoryList.html")
        liblink.innerHTML = "Thư viện và Tài liệu của 29tringuyen"
        li2_1.style.fontSize = averagefontsize
        li2_1.appendChild(liblink)
        unorderedlist2.appendChild(li2_1)

        let li2_2 = document.createElement("li")
        let tn12348liblink = document.createElement("a")
        tn12348liblink.href = URL("sections/TheTNProductionArchive.html")
        tn12348liblink.innerHTML = "The TN. Archive"
        li2_2.style.fontSize = averagefontsize
        li2_2.appendChild(tn12348liblink)
        unorderedlist2.appendChild(li2_2)

        let li2_3 = document.createElement("li")
        let storylink = document.createElement("a")
        storylink.href = URL("story/main.html")
        storylink.innerHTML = "Trang Câu Chuyện"
        li2_3.style.fontSize = averagefontsize
        li2_3.appendChild(storylink)
        unorderedlist2.appendChild(li2_3)
    }
}

function LoadCopyrightFooter() {
    const footers = document.getElementsByClassName("Footer");
    const datetime = new Date();
    const yearsSince2016 = parseFloat((datetime - new Date(2016, 6, 29)) / 3.154e+10).toFixed(2)

    for (let i = 0; i < footers.length; i++) {
        footers[i].appendChild(document.createElement("hr"));

        var copyrighttext = document.createElement("p");
        copyrighttext.style.textAlign = "center";
        copyrighttext.innerHTML = `Trí Nguyên - 29_tringuyen ©: 2016-${datetime.getFullYear()} (${yearsSince2016} năm)`
        footers[i].appendChild(copyrighttext);

        footers[i].appendChild(document.createElement("hr"));
    }

    console.log(`The page contains ${footers.length} copyright footers!`);
}

function RomanizeNumber(num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}