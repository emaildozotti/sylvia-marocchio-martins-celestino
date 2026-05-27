import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 8 FAQ)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  eyebrow: 'dúvidas frequentes',
  heading: 'Perguntas frequentes',
  faqs: [
    {
      q: 'Como é a primeira sessão?',
      a: 'A primeira sessão é online por vídeo (ou presencial em Presidente Prudente, SP). É uma conversa em que eu te ajudo a fazer a primeira ligação entre o que você sente hoje e a marca antiga que sustenta isso. Você sai com clareza imediata e com indicação se faz sentido continuar.',
    },
    {
      q: 'Preciso ser cristã pra fazer o trabalho?',
      a: 'Não. O acolhimento cristão é a base do meu trabalho, mas eu não forço fé como argumento nem prosélito. Se você é cristã, vou sustentar você na sua fé. Se não é, eu respeito sua história e conduzo o reprocessamento sem invadir.',
    },
    {
      q: 'A Terapia de Reprocessamento Generativo vai me fazer reviver o trauma?',
      a: 'Reprocessar não é reviver. É acessar a marca antiga, ligar ela com a dor de hoje, e liberar a carga que ela ainda traz. Eu conduzo passo a passo. Você não fica sozinha com a dor antiga em nenhum momento da sessão.',
    },
    {
      q: 'Você atende qualquer caso?',
      a: 'Não. Eu conscientemente não atendo casos psiquiátricos complexos como esquizofrenia e autismo, porque acredito que essas pessoas precisam de profissional com o suporte adequado à condição delas. Nesses casos eu faço encaminhamento.',
    },
    {
      q: 'Eu já fiz terapia antes e não funcionou. Por que dessa vez seria diferente?',
      a: 'A maior parte da minha agenda hoje é de mulheres que já passaram por outros terapeutas. O que muda é a abordagem: a TRG liga o trauma antigo com a dor de hoje e reprocessa a marca no inconsciente. Não fica na superfície. Isso é o que sua terapia anterior provavelmente não acessou.',
    },
  ],
}
// ════════════════════════════════════════════════════════════════════

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="container-ultra">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <div
              style={{
                width: '2px',
                height: '40px',
                backgroundColor: 'var(--color-secondary)',
                opacity: 0.7,
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <span className="eyebrow-ultra" style={{ color: 'var(--color-secondary)' }}>
              {COPY.eyebrow}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="text-3xl md:text-4xl mb-10 md:mb-14"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-primary)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {COPY.heading}
          </h2>
        </FadeIn>

        {/* Accordion */}
        <div className="flex flex-col gap-0">
          {COPY.faqs.map((faq, i) => (
            <FadeIn key={i} delay={0.05 * i}>
              <div
                style={{
                  borderTop: `1px solid color-mix(in srgb, var(--color-primary) 12%, transparent)`,
                  ...(i === COPY.faqs.length - 1
                    ? { borderBottom: `1px solid color-mix(in srgb, var(--color-primary) 12%, transparent)` }
                    : {}),
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left cursor-pointer"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: '1.25rem 0',
                  }}
                  aria-expanded={open === i}
                >
                  <span
                    className="text-base md:text-lg"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--color-primary)',
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="shrink-0"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ stroke: 'var(--color-secondary)' }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="text-sm md:text-base leading-relaxed pb-6"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          color: 'var(--color-primary)',
                          fontWeight: 300,
                          lineHeight: 1.85,
                          opacity: 0.8,
                          maxWidth: '680px',
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
