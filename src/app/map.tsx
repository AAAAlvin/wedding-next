

export function Map() {
    return (
      <div className="flex justify-center h-80">
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3175.12361179637!2d126.99650397585998!3d37.26849577211727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sko!2skr!4v1737547104288!5m2!1sko!2skr"
            height="300"
            width="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  }
  