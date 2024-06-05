const { buyTollRoadCard, topupBalance, useTollRoad } = require('./utils');

async function getTollAccess() {
    try {
        console.log('Membeli kartu tol...');
        const card = await buyTollRoadCard(25);
        console.log('Kartu tol berhasil dibeli:', card);

        console.log('Mengisi saldo kartu tol...');
        const toppedUpCard = await topupBalance(card, 10);
        console.log('Saldo kartu tol berhasil diisi:', toppedUpCard);

        console.log('Menggunakan akses jalan tol...');
        await useTollRoad(toppedUpCard);
        console.log('Berhasil menggunakan jalan tol!');
    } catch (error) {
        console.log('Terjadi kesalahan:', error.message);
    }
}

getTollAccess();
