function ServiceCard({ badge, title, subtitle, price, priceNote, features, highlight, cta, ctaLink }) {
  return (
    <div
      className="card-hover"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: '1rem',
        overflow: 'hidden',
        background: highlight
          ? 'linear-gradient(160deg, #1a1200 0%, #2a1f00 100%)'
          : 'linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
        border: highlight ? '2px solid #C9A227' : '1px solid rgba(255,255,255,0.1)',
        boxShadow: highlight ? '0 0 50px rgba(201,162,39,0.2)' : 'none',
      }}
    >
      {/* Top banner for highlight */}
      {highlight && (
        <div style={{
          padding: '0.5rem 0', textAlign: 'center',
          color: '#000', fontSize: '0.75rem', fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          background: 'linear-gradient(90deg, #C9A227, #F0C040)',
        }}>
          Mais Popular
        </div>
      )}

      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Badge */}
        <span style={{
          display: 'inline-block', alignSelf: 'flex-start',
          fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em',
          textTransform: 'uppercase', padding: '0.25rem 0.75rem',
          borderRadius: '9999px', marginBottom: '1rem',
          background: highlight ? 'rgba(201,162,39,0.2)' : 'rgba(255,255,255,0.06)',
          color: highlight ? '#F0C040' : '#aaa',
        }}>
          {badge}
        </span>

        <h3 className="font-bebas" style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.25rem' }}>{title}</h3>
        <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{subtitle}</p>

        {/* Price */}
        {price ? (
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
              <span style={{ color: '#9ca3af', fontSize: '1.1rem' }}>R$</span>
              <span className="font-bebas" style={{ fontSize: '4rem', lineHeight: 1, color: '#F0C040' }}>{price}</span>
              <span style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem' }}>/mês</span>
            </div>
            {priceNote && <p style={{ color: '#6b7280', fontSize: '0.75rem', marginTop: '0.25rem' }}>{priceNote}</p>}
          </div>
        ) : (
          <div style={{ marginBottom: '1.5rem' }}>
            <div className="font-bebas" style={{
              display: 'inline-block', padding: '0.75rem 1.5rem', borderRadius: '0.5rem',
              fontSize: '1.5rem', color: '#F0C040',
              background: 'rgba(201,162,39,0.1)', border: '1px dashed rgba(201,162,39,0.4)',
            }}>
              Sob Consulta
            </div>
            {priceNote && <p style={{ color: '#6b7280', fontSize: '0.75rem', marginTop: '0.75rem' }}>{priceNote}</p>}
          </div>
        )}

        <div className="section-divider" style={{ marginBottom: '1.5rem' }} />

        {/* Features */}
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1, marginBottom: '2rem', listStyle: 'none' }}>
          {features.map((f) => (
            <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem', color: '#d1d5db' }}>
              <span style={{
                flexShrink: 0, marginTop: '2px',
                width: '1.25rem', height: '1.25rem', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(201,162,39,0.2)',
              }}>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem 1.5rem', borderRadius: '0.75rem',
            fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
            transition: 'filter 0.2s',
            ...(highlight
              ? { background: 'linear-gradient(135deg, #C9A227, #F0C040)', color: '#000' }
              : { background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.4)', color: '#F0C040' }
            ),
          }}
        >
          {cta}
        </a>
      </div>
    </div>
  )
}

export default function Services() {
  const services = [
    {
      badge: 'Online',
      title: 'Consultoria Online',
      subtitle: 'Treinos + Auxílio Alimentar',
      price: '150',
      priceNote: 'Plano mensal — sem fidelidade',
      highlight: true,
      features: [
        'Treino 100% personalizado para seu objetivo',
        'Auxílio e orientação nutricional',
        'Acompanhamento remoto pelo WhatsApp',
        'Ajustes mensais no treino e dieta',
        'Foco em hipertrofia, emagrecimento ou massa magra',
        'Disponível em todo o Brasil',
      ],
      cta: 'Contratar Agora — R$ 150/mês',
      ctaLink: 'https://wa.me/5551999150552?text=Olá Charles! Tenho interesse na Consultoria Online por R$ 150/mês.',
    },
    {
      badge: 'Presencial',
      title: 'Personal Trainer',
      subtitle: 'Treino Acompanhado',
      price: null,
      priceNote: 'Horários e valores disponíveis sob consulta — atendo na rede Paradox',
      highlight: false,
      features: [
        'Treino acompanhado em qualquer unidade Paradox',
        'Supervisão técnica e correção de postura',
        'Protocolo de treino individualizado',
        'Evolução monitorada aula a aula',
        'Horários flexíveis sob consulta',
        'Planos semanais personalizados',
      ],
      cta: 'Consultar Valores e Horários',
      ctaLink: 'https://wa.me/5551999150552?text=Olá Charles! Tenho interesse no Personal Trainer presencial.',
    },
  ]

  return (
    <section id="servicos" style={{ padding: '6rem 0', background: '#0a0a0a' }}>
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#C9A227', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            O que ofereço
          </p>
          <h2 className="font-bebas" style={{ fontSize: 'clamp(2.5rem,6vw,4rem)', color: '#fff', marginBottom: '1rem' }}>
            MEUS <span className="gold-gradient-text">SERVIÇOS</span>
          </h2>
          <div className="section-divider" style={{ width: '8rem' }} />
          <p style={{ color: '#9ca3af', marginTop: '1.5rem', maxWidth: '36rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Escolha a modalidade que melhor se encaixa na sua rotina. Seja online ou presencial, o resultado é o mesmo: real e duradouro.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '2rem',
          justifyContent: 'center', alignItems: 'stretch',
          maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto',
        }}>
          {services.map((s) => (
            <div key={s.title} style={{ flex: '1 1 380px', minWidth: 0, maxWidth: '430px' }}>
              <ServiceCard {...s} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '4rem', padding: '2.5rem', borderRadius: '1rem', textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(201,162,39,0.08), rgba(201,162,39,0.03))',
          border: '1px solid rgba(201,162,39,0.2)',
        }}>
          <p style={{ color: '#d1d5db', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ficou com dúvidas? Fale diretamente comigo!</p>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Respondo no WhatsApp em até 24 horas.</p>
          <a
            href="https://wa.me/5551999150552"
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-gold"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              padding: '1rem 2.5rem', borderRadius: '0.75rem',
              fontWeight: 700, color: '#000', fontSize: '1.05rem',
              background: 'linear-gradient(135deg, #C9A227, #F0C040)',
              textDecoration: 'none',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar com Charles no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
