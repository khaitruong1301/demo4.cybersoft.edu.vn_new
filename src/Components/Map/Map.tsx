const Map = () => {
    return (
        <div className="h-screen w-full hidden md:block sticky top-28">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15739732.907271802!2d96.86701116987972!3d15.607230160501059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1661359870280!5m2!1svi!2s"
                width={"100%"}
                height={"100%"}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
};

export default Map;
