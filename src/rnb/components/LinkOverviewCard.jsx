import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import './LinkOverviewCard.css';

export default function LinkOverviewCard({ module, delay = 0, accent }) {
  const { title, href, to } = module;

  const className =
    'link-overview-card glass-card fade-in-up link-overview-card--clickable';
  const style = {
    animationDelay: `${delay}ms`,
    ...(accent ? { '--link-card-accent': accent } : {}),
  };

  const content = (
    <>
      <h3 className="link-overview-card-title">{title}</h3>
      {href ? (
        <ExternalLink
          className="link-overview-card-external-icon"
          size={16}
          aria-hidden
        />
      ) : null}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={className}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={to || '/home'} className={className} style={style}>
      {content}
    </Link>
  );
}
