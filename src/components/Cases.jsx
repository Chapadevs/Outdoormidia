const CASES = [
  {
    tag: 'Varejo',
    title: 'O lançamento que dominou Curitiba',
    meta: 'Front Light + Digital · 4 semanas',
  },
  {
    tag: 'Entretenimento',
    title: 'Alta frequência em outdoor digital',
    meta: 'Outdoor Digital · 30 telas',
  },
  {
    tag: 'Indústria',
    title: 'Cobertura completa nas rodovias',
    meta: 'Rodovias · PR + SC',
  },
  {
    tag: 'Lançamento',
    title: 'Projeto icônico no coração da cidade',
    meta: 'Icônico · Monumental',
  },
]

export default function Cases() {
  return (
    <section className="block" id="cases" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cases-head reveal" style={{ marginBottom: 34 }}>
          <div className="lab" style={{ margin: 0, flex: 1 }}>
            <span className="num">03</span>
            <h2>Cases</h2>
            <span className="rule"></span>
          </div>
          <span className="eyebrow" style={{ whiteSpace: 'nowrap', alignSelf: 'flex-end' }}>
            Arraste →
          </span>
        </div>
      </div>
      <div className="wrap">
        <div className="rail">
          {CASES.map((c) => (
            <div className="case" key={c.title}>
              <span className="ctag">{c.tag}</span>
              <div>
                <h3>{c.title}</h3>
                <div className="cmeta">{c.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
