function PriceCard({ title, price, listing }: { title: string, price: string, listing: string[] }) {
    return (
        <div className="bg-white rounded-2xl border border-blue-200 p-8 flex flex-col gap-6">
            <div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-900">{title}</h3>
                <p className="text-blue-900/80">Lorem ipsum dolor sit.</p>
            </div>
            <span className="block text-lg my-4 md:text-2xl font-medium text-blue-900">Rp<span className="text-3xl md:text-5xl font-semibold text-center">{price}</span>/tahun</span>
            <button
                className="text-sm md:text-base text-blue-500 border w-full border-blue-500 px-6 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition font-semibold">
                Pilih Paket
            </button>
            <ul className="text-blue-900/80 list-inside list-disc">
                {listing.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
        </div>
    );
}

export default PriceCard;