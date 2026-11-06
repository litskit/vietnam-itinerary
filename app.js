const days = [
  { dow: 'FRI', date: 6, place: 'HO CHI MINH CITY', title: 'Hello, Saigon.', subtitle: 'Arrive, settle in, and ease into Vietnam.', tag: 'ARRIVAL DAY', items: [['01', 'Arrive in Ho Chi Minh City', 'Morning arrival. Take your time getting settled — no need to over-schedule day one.'], ['02', 'Find your first great meal', 'Start with a food crawl around District 1 or Thao Dien.'], ['03', 'A little reset', 'If you feel up to it, make time for a hair salon or skin spa.']], note: 'Take it easy today. You have a big adventure ahead.' },
  { dow: 'SAT', date: 7, place: 'HO CHI MINH CITY', title: 'A taste of the city.', subtitle: 'Good food, a little history, and time for you.', tag: 'CITY DAY', items: [['01', 'Ben Thanh Market', 'Browse the stalls and grab something delicious.'], ['02', 'War Remnants Museum', 'Pair the museum and market in one half-day.'], ['03', 'Food & self-care', 'Explore District 1 or Thao Dien, with time for that salon or spa.']], note: 'Optional: Cai Rang floating market requires a 3:30–5am departure or a night in Can Tho. It takes the whole day.' },
  { dow: 'SUN', date: 8, place: 'HO CHI MINH CITY', title: 'Make it your own.', subtitle: 'One more day to explore at your own pace.', tag: 'FLEX DAY', items: [['01', 'Explore more of Saigon', 'Follow your appetite, revisit a favorite, or fit in the museum and market.'], ['02', 'Choose your adventure', 'The Cu Chi Tunnels are an option if you want to venture out.'], ['03', 'Get ready for the coast', 'Pack up for tomorrow’s flight to Da Nang.']], note: 'Cai Rang floating market is also possible today, but it’s a very early, full-day trip. The market is best around 6–8am.' },
  { dow: 'MON', date: 9, place: 'DA NANG & HOI AN', title: 'Hello, central coast.', subtitle: 'A change of scenery and an evening by the water.', tag: 'FLIGHT DAY', items: [['01', 'Fly to Da Nang', 'A morning flight from HCMC is the best way to make the most of today.'], ['02', 'Marble Mountains', 'Explore the caves and temple, or settle in and enjoy the coast.'], ['03', 'Hoi An after dark', 'Wander the Ancient Town, visit a tailor, and see the lantern boats on the Thu Bon River at sunset.']], note: 'The HCMC → Da Nang flight still needs to be confirmed.' },
  { dow: 'TUE', date: 10, place: 'DA NANG & HOI AN', title: 'A little coastal magic.', subtitle: 'Mountains, lanterns, and whatever feels right.', tag: 'EXPLORE DAY', items: [['01', 'Ba Na Hills & Golden Bridge', 'Go early for a better chance of avoiding crowds and clouds.'], ['02', 'Pick your afternoon', 'Try the Bay Mau Coconut Forest basket boats, or take it slow.'], ['03', 'An evening in Da Nang', 'See Dragon Bridge at night, or spend more time among Hoi An’s lanterns.']], note: 'Need a spa day? Cham Riverside Wellness & Onsen has an approximately 400k VND day pass; check current details before going.' },
  { dow: 'WED', date: 11, place: 'HANOI', title: 'Onward to Hanoi.', subtitle: 'A new city, a fresh cup of egg coffee.', tag: 'FLIGHT DAY', items: [['01', 'Fly Da Nang → Hanoi', 'Take a morning flight, then settle into the capital.'], ['02', 'Meet the Old Quarter', 'Follow the street food, try egg coffee, and wander around Hoan Kiem Lake.'], ['03', 'See where the day takes you', 'Train Street is on your saved list; check access and train times locally.']], note: 'Keep arrival day flexible — flights and transfers take time.' },
  { dow: 'THU', date: 12, place: 'HANOI', title: 'A day in the capital.', subtitle: 'Culture, coffee, and a little wandering.', tag: 'CITY DAY', items: [['01', 'A morning of history', 'Visit the Ho Chi Minh Mausoleum area and the Temple of Literature. Check opening hours before you go.'], ['02', 'Old Quarter flavors', 'Make room for street food and another egg coffee.'], ['03', 'Optional: Incense Village', 'A half-day trip if your schedule feels light.']], note: 'Tomorrow starts early with the transfer to Ninh Binh.' },
  { dow: 'FRI', date: 13, place: 'NINH BINH', title: 'Into the green.', subtitle: 'A slower pace, limestone peaks, and time on the water.', tag: 'TRANSFER DAY', items: [['01', 'Hanoi → Ninh Binh', 'Take a morning limousine transfer, around 2 hours; aim to arrive around 9am.'], ['02', 'Trang An boat tour', 'Spend the morning drifting through the limestone landscape.'], ['03', 'Hoa Lu ancient capital', 'Explore the historic capital in the afternoon.']], note: 'A sunset duck farm visit is another option if time allows.' },
  { dow: 'SAT', date: 14, place: 'NINH BINH', title: 'The scenic route.', subtitle: 'Sunrise views and a day on two wheels.', tag: 'EXPLORE DAY', items: [['01', 'Mua Cave at sunrise', 'Head up Hang Mua early for the views.'], ['02', 'Bike around Tam Coc', 'Rent a bicycle and take the countryside at your own pace.'], ['03', 'Rest before the road', 'Have an early night before the overnight transfer to Ha Giang.']], note: 'Confirm the overnight bus departure: around midnight at the start of Nov 15, with arrival around 7am.' },
  { dow: 'SUN', date: 15, place: 'HA GIANG LOOP', title: 'Into the mountains.', subtitle: 'The big loop begins. Get ready for the views.', tag: 'LOOP · DAY 1', items: [['01', 'Arrive in Ha Giang', 'The overnight bus from Ninh Binh is expected around 7am. Confirm timing with your operator.'], ['02', 'Start the loop', 'Ride north through mountain scenery, with viewpoints and village lunch stops.'], ['03', 'Quan Ba', 'Look out for Heaven Gate and the Twin Mountains along the way.']], note: 'This is a demanding start after an overnight bus. Choose an easy-rider if you don’t ride, and confirm the itinerary and rest stops.' },
  { dow: 'MON', date: 16, place: 'HA GIANG LOOP', title: 'The long way around.', subtitle: 'Mountain roads and views worth stopping for.', tag: 'LOOP · DAY 2', items: [['01', 'Dong Van Karst Plateau', 'Take in the dramatic landscapes and small villages.'], ['02', 'Ma Pi Leng Pass', 'A highlight of the loop, with views toward the Nho Que River.'], ['03', 'Settle in for the night', 'Expect long hours on the bike, local lunches, and maybe a group karaoke night.']], note: 'Exact stops and overnight locations depend on your loop operator.' },
  { dow: 'TUE', date: 17, place: 'HA GIANG LOOP', title: 'One last mountain view.', subtitle: 'Finish the loop, then start the journey south.', tag: 'LOOP · DAY 3', items: [['01', 'Finish the loop', 'Soak up the final viewpoints and village stops.'], ['02', 'Other possible highlights', 'Ask your operator about Lung Cu Flag Tower and waterfall swim stops.'], ['03', 'Return toward Saigon', 'Travel via Hanoi for a flight to HCMC. This is a long transfer; check connections carefully.']], note: 'An evening return and night in Saigon are planned, but the timing is tight. Confirm the full connection before booking.' },
  { dow: 'WED', date: 18, place: 'HO CHI MINH CITY', title: 'A soft landing.', subtitle: 'One last day in Saigon, with nothing to rush.', tag: 'BUFFER DAY', items: [['01', 'Catch up on rest', 'Sleep in after the loop and the long journey south.'], ['02', 'One last food run', 'Return to a favorite or try something new.'], ['03', 'Get ready for home', 'Repack and fit in a salon or spa touch-up if you like.']], note: 'No day trips today. Protect this buffer before tomorrow’s flight.' },
  { dow: 'THU', date: 19, place: 'HO CHI MINH CITY', title: 'Until next time.', subtitle: 'One last morning, a lifetime of stories.', tag: 'DEPARTURE DAY', items: [['01', 'Head to the airport', 'Your flight to the USA is in the morning. Allow plenty of time for the journey and check-in.'], ['02', 'Take the memories with you', 'Vietnam will be here when you’re ready for the next adventure.']], note: 'Check your flight and airport transfer details ahead of time.' }
];

const picker = document.querySelector('#day-picker');
const card = document.querySelector('#day-card');

days.forEach((day, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'day-button';
  button.setAttribute('aria-label', `${day.dow} November ${day.date}, ${day.place}`);
  button.innerHTML = `<span>${day.dow}</span><strong>${day.date}</strong>`;
  button.addEventListener('click', () => showDay(index));
  picker.append(button);
});

function showDay(index) {
  const day = days[index];
  picker.querySelectorAll('button').forEach((button, buttonIndex) => {
    button.classList.toggle('selected', buttonIndex === index);
    button.setAttribute('aria-pressed', String(buttonIndex === index));
  });
  card.innerHTML = `
    <div class="day-card-top"><div><div class="day-location"><span>⌁</span> ${day.place} <b> / </b> ${day.dow}, NOV ${day.date}</div><h3>${day.title}</h3><p>${day.subtitle}</p></div><span class="day-tag">${day.tag}</span></div>
    <div class="day-items">${day.items.map(item => `<div class="day-item"><span>${item[0]}</span><div><h4>${item[1]}</h4><p>${item[2]}</p></div></div>`).join('')}</div>
    <div class="day-note"><span>✳</span><p><strong>A LITTLE NOTE</strong>${day.note}</p></div>`;
}

document.querySelector('#loop-button').addEventListener('click', () => {
  showDay(9);
  document.querySelector('#itinerary').scrollIntoView({ behavior: 'smooth' });
  picker.querySelectorAll('button')[9].focus({ preventScroll: true });
});

showDay(0);
