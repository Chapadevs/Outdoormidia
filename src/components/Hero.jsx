import { WHATSAPP_URL } from '../constants.js'

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src={`${import.meta.env.BASE_URL}media/hero-video.mp4`}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="hero-side">Nº1 em Out of Home na Região Sul</div>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div className="hero-meta eyebrow">
          <span>Out of Home</span> · <span>Desde 1960</span> · <span><b>PR + SC</b></span>
        </div>
        <h1 className="display">
          Toda <span className="o">Hora</span><br />em Todo<br /><span className="o">Lugar.</span>
        </h1>
        <div className="dimrow">
          <span>12 × 4 m</span>
          <span className="bar"></span>
          <span>10 × 3 m passarela</span>
          <span className="bar"></span>
          <span>Digital / LED</span>
        </div>
        <div className="hero-bottom">
          <p>
            66 anos colocando marcas onde o Sul passa todos os dias — do outdoor digital às
            rodovias, do aeroporto aos shoppings.
          </p>
          <div className="hero-cta">
            <a href="#plataformas" className="btn">Ver plataformas</a>
            <a href={WHATSAPP_URL} className="btn btn-fill">Montar campanha</a>
          </div>
        </div>
      </div>
    </section>
  )
}
