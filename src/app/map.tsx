

export function Map() {
    return (
      <div className="flex justify-center">
        <div className="relative w-4/5 pb-[56.25%]"> {/* 16:9 비율 유지 */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.9692335843314!2d126.99924383682101!3d37.268548733630205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b431e409a9307%3A0x1b2d431dea0a4da0!2z64W467O07YWUIOyVsOuwsOyEnOuNlCDsiJjsm5A!5e0!3m2!1sko!2skr!4v1738205913224!5m2!1sko!2skr"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  }
  