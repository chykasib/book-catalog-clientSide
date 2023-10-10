import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2bef6362-5639-4781-b1ea-91f2f3922653/dfpp6oh-b3190849-3b45-4727-b09b-cc5042672fdc.jpg/v1/fit/w_828,h_1246,q_70,strp/i_m_dancing_in_the_dark__by_onyxhearted_dfpp6oh-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUzNCIsInBhdGgiOiJcL2ZcLzJiZWY2MzYyLTU2MzktNDc4MS1iMWVhLTkxZjJmMzkyMjY1M1wvZGZwcDZvaC1iMzE5MDg0OS0zYjQ1LTQ3MjctYjA5Yi1jYzUwNDI2NzJmZGMuanBnIiwid2lkdGgiOiI8PTEwMTkifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.MzNMa5CIYSc0zY1-OZ6vKyx-ocEUzhO8pkkzT_4mFw8"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="card-body">
            <h1 className="text-5xl font-bold">
              Unlock the World of Literary Exploration
            </h1>
            <p className="py-6">
              Greetings to our BOOKS platform, a literary haven tailored for
              passionate readers and book aficionados. Delve into an extensive
              array of enthralling narratives, enlightening non-fiction, and
              literary gems. Immerse yourself in the universe of books, venture
              into fresh genres, and set off on memorable literary expeditions.
              Allow the pages to breathe life into your imagination and fuel
              your fervor for reading.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-primary hover:scale-105 transition-transform">
                <Link to="/allbooks">All Books</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
