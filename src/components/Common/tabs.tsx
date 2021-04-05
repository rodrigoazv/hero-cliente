import React from 'react';
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { StyledTabsProps, TabPanelProps, PropsTab } from './types';

interface CustomTabs {
  customTabs: PropsTab[];
}

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 180,
      width: '100%',
      backgroundColor: '#333',
    },
  },
})((props: StyledTabsProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
));

interface StyledTabProps {
  label: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const StyledTab = withStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
          opacity: 1,
        },
      },
    }),
  // eslint-disable-next-line react/jsx-props-no-spreading
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo: {
    '& button': {
      fontWeight: 1000,
      color: '#333',
    },
    '& span': {
      height: 3,
    },
    backgroundColor: 'rgba(66,236,154);',
  },
}));

const CustomizedTabs: React.FC<CustomTabs> = ({ customTabs }: CustomTabs) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo}>
        <StyledTabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          {customTabs.map((tab) => (
            <StyledTab label={tab.label} />
          ))}
        </StyledTabs>
      </div>
      {customTabs.map((tab, index) => (
        <TabPanel value={value} index={index}>
          {tab.component}
        </TabPanel>
      ))}
    </div>
  );
};

export default CustomizedTabs;
