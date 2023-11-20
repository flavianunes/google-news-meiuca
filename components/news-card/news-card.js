import { ButtonLink, CardContent, Typography } from "@/components";

import styles from "./news-card.module.scss";

function NewsCard({ article }) {
  return (
    <CardContent>
      <CardContent.Header>
        <Typography tag="h2" variant="heading" className={styles.heading}>
          {article.title}
        </Typography>
        <Typography tag="p" variant="subtitle" className={styles.subtitle}>
          {article.description}
        </Typography>
      </CardContent.Header>
      <Typography tag="p" variant="paragraph" className={styles.paragraph}>
        {article.content}
      </Typography>
      <CardContent.Footer>
        <ButtonLink href={article.url} target="_blank">
          Acesse aqui
        </ButtonLink>
      </CardContent.Footer>
    </CardContent>
  );
}

export default NewsCard;
