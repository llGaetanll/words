import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Typography from "@mui/material/Typography"

import theme from '@/util/theme';

const WordCard = ({ word, ipa, wordType, definitions }) => {
  return (
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <div css={{ display: 'flex', alignItems: 'center', gap: theme.spacing(2) }}>
        <Typography component="h1" variant="h3">
          {word}
        </Typography>

        <Divider orientation='vertical' variant='middle' flexItem />

        <Typography component="h2" variant="h5" css={{ position: 'relative', top: 4 }}>
          <span css={{ opacity: 0.8 }}>/</span>{ipa}<span css={{ opacity: 0.8 }}>/</span>
        </Typography>

        <Divider orientation='vertical' variant='middle' flexItem />

        <Typography component="h2" variant="h5" css={{ position: 'relative', top: 4 }}>
          {wordType.toLowerCase()}
        </Typography>
      </div>
      <div>
        {definitions.length > 1 ? (
          <List>
            {definitions.map(def => (
              <ListItem key={def}>
                <ListItemIcon css={{ minWidth: 0, marginRight: theme.spacing(2) }}>
                  <CircleOutlinedIcon fontSize="inherit" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant='p'>
                    {def}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant='p'>
            {def}
          </Typography>
        )}
      </div>
    </div>
  )
}

const Index = () => (
  <div css={{ display: "flex", width: "inherit", height: 'inherit', alignItems: 'center', justifyContent: 'center' }}>
    {/* some example word here for now */}
    <WordCard
      word="Perchance"
      ipa="pər-chăns′"
      wordType="Adverb"
      definitions={[
        "Perhaps; possibly.",
        "By chance; perhaps; peradventure.",
        "Perhaps; by chance."
      ]}
    />
  </div>
);

export default Index;
