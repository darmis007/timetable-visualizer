document.addEventListener("DOMContentLoaded", function () {
    const HOURS = [
        "8:00 - 9:00",
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 13:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
        "15:00 - 16:00",
        "16:00 - 17:00",
        "17:00 - 18:00",
        "18:00 - 19:00"
    ];

    const DAYS = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    const BACKGROUNDS = [
        "#FFAC00",
        "#ABFF9C",
        "#FF632E",
        "#FF3DA9",
        "#AA49FF",
        "#41FFAC",
        "#0028B2",
        "#FFFFFF",
        "#AAB291",
        "#FFD619",
        '#9B9AFF',
        '#FF7E19',
        '#FFFF19',
        '#B2585C',
        '#0A00B2',
        '#FF199D'
    ];

    const PROFS = ['Prashant U Manohar', 'P R Deepa', 'SHAMSHER B SINGH', 'Biswanath Layek', 'Kamlesh Tiwari', 'KRISHNA MUNIYOOR', 'Rohitash Kumar (RS)', 'Soumana Joarder (RS)', 'Prabhjeet Singh (RS)', 'M Kavya Shree (RS)', 'BHUPENDRA K SHARMA', 'TANU SHUKLA', 'Saumi Ray', 'Banoth Karan Kumar (RS)', 'Abheek Gupta (RS)', 'RAKESH CHOUBISA', 'Amit Jain', 'ANSHUMAN DALVI', 'Rajeev Sakhuja', 'Abhishek Anand (RS)', 'BHAGAVATULA VANI', 'HITESH DUTT MATHUR', 'DEVESH SAMAIYA', 'Madhukar Mishra', 'SUBHASHISH GANGOPADHYA', 'Ashutosh Joshi (RS)', 'NAVNEET GOYAL', 'Kiran Bajaj', 'ANIL GAIKWAD', 'VIRENDRA S SHEKHAWAT', 'Vinod Kumar (RS)', 'Aditya Raw Gautam', 'PRAVEEN GOYAL', 'Palak Sangal (RS)', 'SATYENDRA KR SHARMA', 'Suresh Gupta', 'SUMANTA PASARI', 'RAJESH P MISHRA', 'Paritosh Shukla', 'Aniruddha Roy', 'Muhammed Puthusseri', 'ABHISHEK MISHRA', 'Moumita Basak (RS)', 'Kaushar Vaidya', 'DIPENDU BHUNIA', 'JITENDRA S RATHORE', 'VINAY CHAMOLA', 'Violina K (RS)', 'Tripti Mishra (RS)', 'ABHIJIT R ASATI', 'Pawan K Ajmera', 'Tulsi Ram Sharma', 'Sarathlal K C (RS)', 'Kedar S. Prayag', 'JITENDRA PANWAR', 'Vaibhav Soni', 'Pidiyara Karishma (RS)', 'R Arun Karthik (RS)', 'Ankita Dixit (RS)', 'Pavitra Sharma(RS)', 'Pankaj Arora', 'SRIJATA DEY', 'Rishikesh Vaidya', 'SAURABH CHADHA', 'Kari Babu Ravi Teja', 'Shilpi Garg', 'Vamshi Krishn (RS)', 'Anuj Adhikary', 'G MUTHUKUMAR', 'Manjuladevi V', 'RAJAN PANDEY', 'SHASHANK GUPTA', 'Amit Sharma (RS)', 'Chavi Mahala (RS)', 'Sarath Lal (RS)', 'Amol M R Marathe', 'Sharad Srivastava', 'Sachin U Belgamwar', 'Manoj Kumar', 'VISHAL GUPTA', 'Krishna Muniyoor', 'Mukesh Budaniya (RS)', 'Divya Rathore', 'K Laxmi swetha (RS)', 'Soniya (RS)', 'P SRINIVASAN', 'SRINIVAS APPARI', 'Ravi Kant (RS)', 'Krishna Chaitanya Etika', 'D Bandyopadhyay', 'MADHURIMA DAS', 'SAKET VERMA', 'Arun Kumar Jalan', 'Nishant Roy', 'Dalip Kumar', 'Krishna Veer Singh (RS)', 'Deepak Sharma', 'Harsh Sharma (RS)', 'Taur Prakash Pandurang (RS)', 'BISWANATH LAYEK', 'Vasanth Keshav (RS)', 'PRAVEEN KUMAR A V', 'Vishal Singh (RS)', 'Rajeev Taliyan', 'GOURAB SIL', 'Nitish Gokhale (RS)', 'Pinki (RS)', 'SURESH KUMAR', 'Anshuman Dalvi', 'Kundrapu Ayyappa Swamy (RS)', 'SHILPI GARG', 'Vishal Gupta', 'GAUTAM SINGHVI', 'DEEPAK SHARMA', 'Praveen Kumar A V', 'Megha (RS)', 'Kanika (RS)', 'Mahima Choudhary (RS)', 'Prakriti Saraf (RS)', 'SHIBANI K JHA', 'ATISH T R PAUL', 'Soumya Kar (RS)', 'Pratik N Sheth', 'SUROJIT PANDE', 'Syamantak Majumder', 'G Muthukumar', 'ABHIJIT K DIGALWAR', 'Amit Dua', 'R GUPTA', 'Rahul Uke (RS)', 'Ankit Agrawal (RS)', 'Nandita Sharma (RS)', 'Balram Dubey', 'Dhitabrata Pal (RS)', 'Geetika Arora (RS)', 'Sudeep Sudesh (RS)', 'Sumukh Thakar (RS)', 'RAJDEEP CHOWDHURY', 'Gaurav Watts', 'Dhananjay Kumar (RS)', 'HARSHAVARDHAN S', 'Divya Malik (RS)', 'Dipendu Bhunia', 'Radha Bhardwaj', 'MADHUKAR MISHRA', 'SRIKANTA ROUTROY', 'Santosh Saraswat (RS)', 'Hitesh Dutt Mathur', 'Navneet Gupta', 'ANIL RAI', 'ARNAB HAZRA', 'ANUPAM YADAV', 'NAVIN SINGH', 'Ayush Owhal (RS)', 'Shyam Sundar Yadav', 'PANKAJ KUMAR SHARMA', 'Swati Sharma (RS)', 'PRATIK N SHETH', 'Punit Khari (RS)', 'Prateek Kala', 'Shailee Gaur (RS)', 'HARIKRISHNAN G NAIR', 'Meghana Tare', 'Akhilesh Kumar Mishra (RS)', 'Pankaj Kumar Sharma', 'Ashish Patel', 'BALRAM DUBEY', 'SACHIN U BELGAMWAR', 'Pingale Ajay Dadabhau (RS)', 'Surekha Bhanot', 'AJAY KUMAR SAH', 'SYAMANTAK MAJUMDER', 'CHANDRA SHEKHAR (MATH)', 'Vaibhav Shastri (RS)', 'PUNEET MISHRA', 'Rupesh Sanjay kumar Jain (RS)', 'RAHUL ARORA', 'Ajita Neogi (RS)', 'Suresh Kumar', 'RAKHEE', 'Neha Gupta (RS)', 'Amresh Kumar (RS)', 'DURGESH VIKRAM', 'TUFAN CHANDRA BERA', 'K K Gupta', 'Gaurav Dwivedi', 'Pramita Saha (RS)', 'S Gurunarayanan', 'Shobham (RS)', 'Uma S Dubey', 'Rajneesh Kumar', 'MURALI M PANDEY', 'GAJENDRA S CHAUHAN', 'KUMAR NEERAJ SACHDEV', 'JP MISRA', 'Nisha Yadav (RS)', 'Vivek Tiwari', 'Manoj Kannan', 'ANEESH A. M', 'MANOJ KANNAN', 'Ankit Soni (RS)', 'Pratibha Saini (RS)', 'DIVYUM SHARMA', 'Dhanashree Surve', 'JITENDER KUMAR', 'Danish Fyaz (RS)', 'Poonam Mulchandani', 'Monika Malik (RS)', 'UDAYAN CHANDA', 'Prabhat Nath Jha', 'Jitender Kumar', 'SUJAN YENUGANTI', 'Divyum Sharma', 'AK DAS', 'Shail Saharan (RS)', 'Praveen Goyal', 'RAJEEV TALIYAN', 'Suvanjan Bhattacharyya', 'PRATEEK KALA', 'RAMKINKAR ROY', 'Jaya K Bhaskar (RS)', 'Madhurima Das', 'Anupam Singhal', 'Ajay Kumar Sah', 'Virendra Singh Nirban', 'KRISHNA CHAITANYA ETIKA', 'Shivani Sharma (RS)', 'Anish Kumar(RS)', 'Raj Kumar Gupta', 'A K Giri', 'AJIT PRATAP SINGH', 'Ansari Imran Kaimudin', 'Anuradha Singh (RS)', 'Shreya Das (RS)', 'Pratibha Sinha (RS)', 'Sujan Yenuganti', 'GIRISH KANT', 'Harish Kumar Mulchandani (RS', 'SANGEETA SHARMA', 'Vasudev Singh Sengar (RS)', 'Pratik Narang', 'VANDANA AGARWAL', 'HEMANT R JADHAV', 'Abdullla Sultan (RS)', 'Ankit Singh Mehra (RS)', 'Prachi Sharma (RS)', 'Abhishek Vyas', 'S M Zafaruddin', 'Santosh Kumar Saini (RS)', 'Mamta Devi Sharma (RS)', 'Rajdeep Chowdhury', 'Mrinmoyee Basu', 'Sumit Mandal (RS)', 'Gautam Singhvi', 'Gurpreet Gaur (RS)', 'Nidhi Bub (RS)', 'MUHAMMED PUTHUSSERI', 'SHUVENDU N PATEL', 'SAUMI RAY', 'Dhananjay Shrinivas Nipate', 'Tejasvi Alladi (RS)', 'Dave Heema (RS)', 'Kapil kumar Choudhary (RS)', 'ASHUTOSH BHATIA', 'Vishalakshi (RS)', 'Smita Dey (RS)', 'Monika Paul (RS)', 'Shuvendu N Patel', 'Niyati Kamlesh Pandya (RS)', 'Taru Saigal (RS)', 'K P Venkatesh', 'R Mahesh', 'S M ZAFARUDDIN', 'RAJNEESH CHOUBISA', 'SUVANJAN BHATTACHARYYA', 'SATYANDRA KUMAR MOURYA', 'Manu Sharma (RS)', 'Shrikanta Pawar (RS)', 'MUKESH KR ROHIL', 'PRASHANT U MANOHAR', 'Pediredla Praveen K (RS)', 'Bijoy K Mukharjee', 'Anant Mishra (RS)', 'PRIYA C SANDE', 'Anshuman', 'Girish Kant', 'Rahul Arora', 'PUSHP LATA', 'Rahul Sharma (RS)', 'Poonam Poonia (RS)', 'ANUPAM SINGHAL', 'PRATIK NARANG', 'Rishi Parvanda (RS)', 'Arnab Hazra', 'Mukul Joshi', 'D D PANT', 'Aishwarya Ramesh (RS)', 'VEENA RAMCHANDRAN', 'Amol Holkundkar', 'RAJESH MATAI', 'NILADRI SARKAR', 'K HARI BABU', 'Somak Chatterjee', 'Srishti Khare', 'Devendra Kumar', 'Hinge Nikita Subhash (RS)', 'Premsai Regalla', 'BIBHAS RANJAN SARKAR', 'Sharyu Kesharwani (RS)', 'Karnam Sariravali (RS)', 'Vinay Chamola', 'ASHISH TIWARI', 'BHANU VARDHAN REDDY', 'DEEPAK CHITKARA', 'Neetu Yadav', 'Rajiv Kumar', 'Rajesh Kumar (MATH)', 'RAJESH KUMAR (MATH)', 'CHANDRA SHEKHAR', 'Garima Singh (RS)', 'Suraj Baloda (RS)', 'Sangita Yadav', 'GAURAV WATTS', 'Mahipal Reddy (RS)', 'ANIL K BHATT', 'G S Sesha Chalapathi', 'PRADEEP KR H KESKAR', 'SHYAM SUNDAR YADAV', 'Jagrity Choudhary (RS)', 'Abhishek S Dhoble', 'Ramkinkar Roy', 'Stuti Chug (RS)', 'RAVI KANT MITTAL', 'Sudeshna M Choudhury', 'Sumit Kumar Agrawal (RS)', 'Bheema Rajesh Kumar (RS)', 'Teena Gakhar (RS)', 'Chandra Shekhar (MATH)', 'VIRENDRA SINGH NIRBAN', 'Swarnima', 'Prashant Upadhyay (RS)', 'Abhishesh Mishra (RS)', 'MADHUSHREE SARKAR', 'D D Pant', 'Saurabh Sharma (RS)', 'Vijay Kumari (RS)', 'Ankit Kumar (RS)', 'Sisir KumarYadav (RS)', 'Neelam Mahala (RS)', 'Ashutosh Bhatia', 'ARUN KUMAR VAISH', 'ANIRUDDHA ROY', 'Mohammad Faraz Naim', 'SOMAK CHATTERJEE', 'Sandhya (RS)', 'TBA (Biosc)', 'Astha Mittal (RS)', 'AAKASH CHAND RAI', 'Venkata Vijayan S (RS)', 'S C Sivasubramanian', 'SUNITA RAINA', 'ANIL KUMAR', 'TRILOK MATHUR', 'Divya Bhardwaj (RS)', 'Narsimha (RS)', 'Priya C Sande', 'Sushila Shekhawat', 'Samrat Mazumdar (RS)', 'SAILAJA NANDIGAMA', 'Ajay Kumar Pani', 'Manigandan (RS)', 'HK MOHANTA', 'ARVIND KUMAR SHARMA', 'Sankalp Paliwal (RS)', 'NIRANKUSH DUTTA', 'Pradeep Kr H Keskar', 'MUKUND LAHOTI', 'JP Misra', 'ABHISHEK', 'Rachel Jovita Barla (RS)', 'Akshay Kumar (RS)', 'Syed Sameen Ahmad Rizvi (RS', 'PRABHAT NATH JHA', 'M S DASGUPTA', 'ANSHUMAN', 'MURALI PALLA', 'Aniruddha Tangirala', 'Manisha Choudhari (RS)', 'Sakshi', 'HARI OM BANSAL', 'Arshveer Kaur (RS)', 'Ashish Khare (RS)', 'Sandeep Sundriyal', 'Anil Kumar K (RS)', 'Rama Krishna Chava (RS)', 'SHIBASISH CHOWDHURY', 'Amritansh Bhanot (RS)', 'SHARAD SRIVASTAVA', 'Srinivas Appari', 'NV Muralidhar Rao', 'Dheerendra Singh', 'Harshavardhan S', 'Bibhas Ranjan Sarkar', 'MEGHANA TARE', 'Puneet Mishra', 'Suchitra Pandey(RS)', 'Sumanta Pasari', 'Vikas Kumar (RS)', 'Jatin Bedi', 'Ritish Kumar (RS)', 'AJAY KUMAR PANI', 'Devesh Samaiya', 'BIJOY KUMAR RAUT', 'RICHA SRIVASTAVA', 'Madhushree Sarkar', 'Neha Meena (RS)', 'SMITA RAGHUVANSHI', 'Rakesh Choubisa', 'S C SIVASUBRAMANIAN', 'ANANTHA KRISHNA CHINTAN', 'Bhanu Vardhan Reddy', 'SK Verma', 'JYOTI', 'MANOJ SONI', 'R Raghavendra Kumar (RS)', 'Chintalapalli Vijayakumar', 'Ashima Sakhuja', 'P Chattopadhyay', 'AMIT JAIN', 'Trilok Mathur', 'Shibasish Chowdhury', 'Sandhya Marathe', 'Linisha Biswal (RS)', 'Rajesh Kumar (CE)', 'PRIYANSH SINGH', 'NV MURALIDHAR RAO', 'SUSHILA SHEKHAWAT', 'KRISHNENDRA SHEKHAWAT', 'Murali Palla', 'Sudeep Pukale (RS)', 'NITIN CHATURVEDI', 'ANIL JINDAL', 'VAIBHAV DIXIT', 'Bhagavatula Vani', 'Srijata Dey', 'Tripti Joshi (RS)', 'VISHAL SAXENA', 'Shahid Khan (RS)', 'Anil Kumar', 'S GURUNARAYANAN', 'Himanshu S. (RS)', 'Reena (RS)', 'RAJIV KUMAR', 'Ankita Daiya (RS)', 'Arihant Kumar Singh (RS)', 'Anukaran Khanna (RS)', 'DEVIKA', 'Rajesh Pradhan (RS)', 'Vaibhav Dixit', 'Neelakshi Sharma (RS)', 'Jitendra Panwar', 'UMA S DUBEY', 'Harshita Sharma (RS)', 'Ginson George (RS)', 'Tapomoy G Sarkar', 'AMIT DUA', 'BANASRI ROY', 'YASHVARDHAN SHARMA', 'JAYASHREE MAHESH', 'Jitendra S Rathore', 'RAJEEV SAKHUJA', 'Abhijit K Digalwar', 'KULDIP SINGH SANGWAN', 'Abhishek Mishra', 'Sharadendu Sharma (RS)', 'POONAM GOYAL', 'Geetilaxmi Mohapatra', 'SANDEEP SUNDRIYAL', 'Amitesh Singh Rajput', 'Navin Singh', 'Inamur R Laskar', 'Kamlesh Kumar', 'Anirudh Sahu (RS)', 'S MURUGESAN', 'P CHATTOPADHYAY', 'A R Harikrishnan', 'Ashish Katyal', 'Somya Agarwal (RS)', 'Aditi Mandal (RS)', 'Jahagirdar Ankush Chandrakant', 'Shailendra Singh (RS)', 'Sangeeta Sharma', 'Bhupendra K Sharma', 'Jennifer Ranjani J.', 'ANIRUDH SINGH RANA', 'Krishnendra Shekhawat', 'Rakhee', 'Shailendra Pawanr (RS)', 'MOHAMMAD FARAZ NAIM', 'Banasri Roy', 'R MAHESH', 'RR MISHRA', 'Niladri Sarkar', 'Shibani K Jha', 'Raghav Goyal', 'K V Krishna (RS)', 'Surojit Pande', 'ANUPAMA MITTAL', 'SUDESHNA M CHOUDHURY', 'Jyoti Tanwar (RS)', 'SK VERMA', 'Aneesh A. M', 'Rajesh P Mishra', 'ARYA KUMAR', 'Ankita Sharma', 'Deepak Chitkara', 'Sampada Mahajan (RS)', 'Pracheta Sengupta (RS)', 'SUNIL KUMAR DUBEY', 'DALIP KUMAR', 'Ramesh Kumar (RS)', 'Leela Rani', 'TBA (Eee/Ins)', 'BIJOY K MUKHARJEE', 'MANOJ KUMAR', 'Saket Verma', 'Shishir Maheshwari', 'KUMAR S BHATTACHARYA', 'RAJNEESH KUMAR', 'Rishi Kumar (RS)', 'GEETILAXMI MOHAPATRA', 'Saumya Arora (RS)', 'Arvind Kumar Sharma', 'Durgesh Vikram', 'T Priya Shreedatta (RS)', 'Ashish Kumar Verma (RS)', 'Hari Om Bansal', 'Vishwjeet Choudhary (RS)', 'BHARTI KHUNGAR', 'Arghya Banerjee', 'NAVNEET GUPTA', 'Ziyaur Rahman (RS)', 'Rajesh Kumar (CSIS)', 'Yashvardhan Sharma', 'Mukund Lahoti', 'Prashant Auti(RS)', 'Gourab Sil', 'Aakash Chand Rai', 'Chetan Jalendra (RS)', 'Mishra Shweta R', 'Farhran Mohammad Khan(RS)', 'Ashish Kumar Srivastava (RS)', 'Shital Patil (RS)', 'ABHISHEK S DHOBLE', 'A K GIRI', 'Shivi Agarwal', 'Atharva Rajendra Bhide(RS)', 'Rishab Bajpai (RS)', 'Ritesh Kumar (RS)', 'Sai Bhargava (RS)', 'Amit R Singh', 'SHAMIK CHAKRABORTY', 'Tufan Chandra Bera', 'Soham Chatterjee (RS)', 'Prashant P Raut (RS)', 'Upendra Singh (RS)', 'Heena Saini (RS)', 'SANJIV KR CHOUDHARY', 'KAUSHAR VAIDYA', 'MEETHA V SHENOY', 'LEELA RANI', 'Anirudh Singh Rana', 'DEVENDRA KUMAR', 'Rajan Pandey', 'RAJESH KUMAR (CE)', 'Gorla Praveen (RS)', 'Anantha Krishna Chintanpalli', 'Indresh Kumar', 'Nisha Sharma (RS)', 'I.K samjibhai (RS)', 'Ashish Tiwari', 'Abhijit R Asati', 'Seriyala Anil Kumar (RS)', 'Tejashree`', 'R Gupta', 'Pragya (RS)', 'Sadhana Jha', 'Raichure Pramod Chandrakant', 'Shashank Gupta', 'SURESH GUPTA', 'RR Mishra', 'Gaurav Tyagi', 'AVINASH GAUTAM', 'Pulleti Siva Sankar (RS)', 'Sampreeti Tahbildar (RS)', 'Subhashish Gangopadhyay', 'AMOL M R MARATHE', 'Sambhavi Shukla', 'P R DEEPA', 'Anushka Verma (RS)', 'Srividya Gorantala', 'SAINATH BITRAGUNTA', 'ARUN KUMAR JALAN', 'VINOD KUMAR CHAUBEY', 'Bharti Khungar', 'Diplesh Gautam (RS)', 'D BANDYOPADHYAY', 'TAPOMOY G SARKAR', 'AK Das', 'ANU GUPTA', 'Deepak Kumar Sahel (RS)', 'KAMLESH KUMAR', 'RAHUL SINGHAL', 'Geetika Wadhwa (RS)', 'RAJ KUMAR GUPTA', 'Aman Takiyar', 'Simran Kushwaha(RS)', 'NISHANT ROY', 'Yogendra Sharma (RS)', 'Nitin Chaturvedi', 'Satyandra Kumar Mourya', 'JENNIFER RANJANI J.',]

    let history = [];

    let BG_USED = new Array(BACKGROUNDS.length);
    for(let i=0; i<BG_USED.length; i++)
        BG_USED[i] = 0;

    const BG_OPACITY = 60;

    let timetable = document.getElementById("timetable");
    
    for(let i=0; i<12; i++) {
        let div = document.createElement("div");
        div.classList.add("row");
        for(let j=0; j<8; j++) {
            if(i==0) {
                if(j==0) {
                    div.innerHTML += `<span class="cell highlight">Days &rarr;<br>Time &darr;</span>`;
                } else {
                    div.innerHTML += `<span class="cell highlight">${DAYS[j-1]}</span>`;
                }
            } else if (j==0) {
                div.innerHTML += `<span class="cell highlight">${i}: ${HOURS[i-1]}</span>`;
            } else {
                div.innerHTML += `<span class="cell"></span>`;
            }
        }
        timetable.appendChild(div);
    }

    let cells = document.getElementsByClassName("cell");
    let addBtn = document.getElementById("add-btn");

    addBtn.addEventListener("click", addBtnHandler);

    function addBtnHandler () {
        document.getElementById("error").style.display = 'none';
        let title = document.getElementById("course-title").value;
        let classroom = document.getElementById("classroom").value;
        let section = document.getElementById("section").value;
        let days = $("#days").select2('val');
        let hours = $("#hours").select2('val');

        if(title.trim() && days.length>0 && hours.length>0 && section.trim()) {
            let random = Math.floor(Math.random() * (BACKGROUNDS.length));
            while(BG_USED[random]) {
                random = Math.floor(Math.random() * (BACKGROUNDS.length));
            }
            BG_USED[random] = 1;

            let arr = [];
            let flag = 0;

            for(let j=0; j<hours.length; j++) {
                for(let i=0; i<days.length; i++) {
                    let day = Number(days[i]);
                    let hour = Number(hours[j]);
                    
                    if(cells[hour*8 + day].innerHTML !== '') {
                        flag = 1;
                        break;
                    }
                    
                    arr.push(hour*8 + day);
                    cells[hour*8 + day].innerHTML = `<strong>${title}</strong>${section}<br>${classroom}`;
                    cells[hour*8 + day].style.background = BACKGROUNDS[random] + BG_OPACITY.toString();
                }
                if(flag === 1)
                    break;
            }

            if(flag === 1) {
                document.getElementById("error").innerHTML = 'Clash exists! Delete first!';
                document.getElementById("error").style.display = 'flex';
                arr.map(index => {
                    cells[index].innerHTML = '';
                    cells[index].style.background = '';
                });
                BACKGROUNDS[random] = 0;
            } else {
                history.push({
                    bgColorIndex: random,
                    arr
                });
    
                if(!checkLunch()) {
                    undo();
                    document.getElementById("error").innerHTML = 'No lunch break!';
                    document.getElementById("error").style.display = 'flex';
                }
            }


            document.getElementById("course-title").value = '';
            document.getElementById("classroom").value = '';
            document.getElementById("section").value = '';
            $("#days").val('').trigger('change');
            $("#hours").val('').trigger('change');
        } else {
            document.getElementById("error").innerHTML = 'One or more fields missing!';
            document.getElementById("error").style.display = 'flex';
        }
    }


    let undoBtn = document.getElementById("undo-btn");
    undoBtn.addEventListener("click", undo);

    function undo () {
        document.getElementById("error").style.display = 'none';
        if(history.length >= 1) {
            let lastMove = history[history.length - 1].arr;
            for(let i=0; i<lastMove.length; i++) {
                cells[lastMove[i]].innerHTML = '';
                cells[lastMove[i]].style.background = '';
            }
            BG_USED[history[history.length - 1].bgColorIndex] = 0;
            
            history.pop();
        } else {
            document.getElementById("error").innerHTML = 'No history found!';
            document.getElementById("error").style.display = 'flex';
        }
    }

    for(let i=0; i<cells.length; i++) {
        if(i>7 && i%8!==0) {
            cells[i].addEventListener("click", function() {
                document.getElementById("error").style.display = 'none';
                let flag = 0;
                history.map((obj, objIndex) => {
                    obj.arr.map(index => {
                        if(index === i) {
                            flag = 1;
                            BG_USED[obj.bgColorIndex] = 0;
                            obj.arr.map(cellIndex => {
                                cells[cellIndex].innerHTML = '';
                                cells[cellIndex].style.background = '';
                            });
                            history.splice(objIndex, 1);
                            return;
                        }
                    })
                });
                if(!flag) {
                    document.getElementById("error").innerHTML = 'Cell is empty!';
                    document.getElementById("error").style.display = 'flex';
                }
            })
        }
    }

    function checkLunch () {
        document.getElementById("error").style.display = 'none';
        for(let j=1; j<8; j++) {
            let flag = 0;
            for(let i=4; i<=6; i++) {
                if(cells[i*8 + j].innerHTML === '') {
                    flag = 1;
                }
            }
            if(!flag)
                return 0;
        }
        return 1;
    }

});

$(document).ready(function() {
    $('#days').select2();
    $('#hours').select2();
});