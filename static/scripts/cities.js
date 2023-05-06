var state_arr = new Array("Mombasa", "Kwale", "Kilifi", "Tana River", "Lamu", "Taita Taveta", "Wajir", "Garissa", "Marsabit", "Mandera", "Isiolo", "Meru", "Tharaka Nithi", "Embu", "Kitui", "Machakos", "Makueni", "Nyandarua", "Nyeri", "Kirinyaga", "Muranga", "Kiambu", "Turkana", "West Pokot", "Samburu", "Trans Nzoia", "Uasin Gishu", "Elgeyo Marakwet", "Nandi", "Baringo", "Laikipia", "Nakuru", "Narok", "Kajiado", "Kericho", "Bomet", "Kakamega", "Vihiga", "Bungoma", "Busia", "Siaya", "Kisumu", "Homabay", "Migori", "Kisii", "Nyamira", "Nairobi");

var s_a = new Array();
s_a[0]="";
s_a[1]="Mombasa | Changamwe | Jomvu | Kisauni | Nyali | Likoni | Mvita";
s_a[2]="Kwale | Msambweni | Lunga Lunga | Matuga | Kinango | Kwale";
s_a[3]="Kilifi | Kaloleni | Rabai | Ganze | Malindi | Magarini | Kilifi North | Kilifi South";
s_a[4]="Tana River | Tana Delta";
s_a[5]="Lamu | Lamu East | Lamu West";
s_a[6]="Taita Taveta | Taveta | Wundanyi | Mwatate | Voi";
s_a[7]="Wajir | Wajir North | Wajir East | Tarbaj | Wajir West | Eldas | Wajir South";
s_a[8]="Garissa | Lagdera | Dadaab | Fafi | Ijara | Balambala | Garissa Township";
s_a[9]="Marsabit | Moyale | North Horr | Saku | Laisamis | Moyale";
s_a[10]="Mandera | Mandera West | Banissa | Mandera North | Mandera South | Lafey | Mandera East";
s_a[11]="Isiolo | Isiolo North | Isiolo South";
s_a[12]="Meru | Igembe South | Igembe Central | Igembe North | Tigania West | Tigania East | North Imenti | Buuri | Central Imenti | South Imenti | Maara";
s_a[13]="Tharaka Nithi | Tharaka | Maara | Chuka | Igambang'ombe";
s_a[14]="Embu | Manyatta | Runyenjes | Mbeere North | Mbeere South";
s_a[15]="Kitui | Kitui West | Kitui Rural | Mwingi Central | Mwingi North | Mwingi West | Kitui South | Kitui East";
s_a[16]="Machakos | Masinga | Yatta | Kangundo | Kathiani | Mavoko";
s_a[17]="Makueni | Kibwezi East | Kibwezi West | Kilome | Mbooni";
s_a[18]="Nyandarua | Kinangop | Kipipiri | Ol Kalou | Ol Joro Orok";
s_a[19]="Nyeri Town | Mathira | Mukurweini | Kieni | Tetu | Othaya";
s_a[20]="Kirinyaga | Kirinyaga Central | Kirinyaga East | Kirinyaga West";
s_a[21]="Muranga";
s_a[22]="Kiambu  | Kiharu | Kangema | Mathioya | Kigumo | Maragwa | Kandara | Gatanga | Gatundu South | Gatundu North | Juja | Thika Town | Ruiru | Githunguri | Kiambu Town | Kiambaa | Kikuyu | Kabete | Limuru | Lari";
s_a[23]="Turkana | Turkana North | Turkana West | Turkana Central | Loima | Turkana South | Turkana East";
s_a[24]="West Pokot | Pokot North | Pokot Central | Pokot South | West Pokot";
s_a[25]="Samburu | Samburu East | Samburu North | Samburu West";
s_a[26]="Trans Nzoia";
s_a[27]="Uasin Gishu | Soy | Turbo | Moiben | Ainabkoi | Kesses | Kapseret ";
s_a[28]="Elgeyo Marakwet | Marakwet East | Marakwet West | Keiyo North | Keiyo South";
s_a[29]="Nandi | Nandi North | Nandi South | Tinderet | Aldai | Chesumei | Mosop | Emgwen | Nandi Hills";
s_a[30]="Baringo | Baringo North | Baringo South | Baringo Central | Baringo East | Baringo West | Mogotio | Eldama Ravine | Koibatek | Marigat";
s_a[31]="Laikipia | Laikipia East | Laikipia West | Laikipia | Laikipia East | Laikipia West";
s_a[32]="Nakuru | Nakuru East | Nakuru West | Gilgil | Kuresoi | Molo | Njoro | Rongai | Subukia | Naivasha";
s_a[33]="Narok | Narok North | Narok South";
s_a[34]="Kajiado | Kajiado East | Kajiado North | Kajiado Central | Kajiado West | Kajiado South";
s_a[35]="Kericho | Bureti | Belgut | Ainamoi";
s_a[36]="Bomet | Sotik | Chepalungu";
s_a[37]="Kakamega | Lugari";
s_a[38]="Vihiga | Emuhaya | Hamisi | Luanda | Sabatia";
s_a[39]="Bungoma | Webuye East | Webuye West | Kimilili | Mount Elgon | Sirisia | Kabuchai | Bumula | Kanduyi | Mumias East | Mumias West | Matungu | Butere | Khwisero | Shinyalu | Ikolomani | Malava | Lurambi | Navakholo | Likuyani | Lugari";
s_a[40]="Busia | Teso North | Teso South | Nambale | Matayos | Butula | Funyula | Budalangi | Samia | Bunyalaa";
s_a[41]="Siaya | Bondo | Rarieda | Ugenya | Ugunja | Alego Usonga | Gem";
s_a[42]="Kisumu | Maseno | Kombewa | Ahero | Muhoroni | Nyakach | Nyando | Seme | Kisumu East | Kisumu West";
s_a[43]="Homabay | Karachuonyo | Rangwe | Ndhiwa | Mbita | Suba";
s_a[44]="Migori | Rongo | Awendo | Suna East | Suna West | Uriri | Nyatike | Kuria West | Kuria East";
s_a[45]="Kisii | Bonchari | South Mugirango | Bomachoge Borabu | Bobasi | Bomachoge Chache | Nyaribari Masaba | Nyaribari Chache | Kitutu Chache North | Kitutu Chache South";
s_a[46]="Nyamira";
s_a[47]="Nairobi | Westlands | Dagoretti | Langata | Kibra | Roysambu | Kasarani | Ruaraka | Embakasi South | Embakasi North | Embakasi Central | Embakasi East | Embakasi West | Makadara | Kamukunji | Starehe | Mathare";

function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select City','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}
