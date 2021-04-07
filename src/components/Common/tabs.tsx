/* eslint-disable react/require-default-props */
import React, { ReactChild } from 'react';
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';

import { StyledTabsProps, TabPanelProps, PropsTab } from './types';
import { setLocalSearch } from '../../store/ducks/local/actions';

interface CustomTabs {
  customTabs: PropsTab[];
  children?: ReactChild;
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
      {value === index && <Box>{children}</Box>}
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
  width: {
    width: '50%',
    '& button': {
      fontWeight: 1000,
      color: '#333',
    },
    '& span': {
      height: 3,
    },
    backgroundColor: 'rgba(66,236,154);',
  },
  fullWidth: {
    width: '100%',
    '& button': {
      fontWeight: 1000,
      color: '#333',
    },
    '& span': {
      height: 3,
    },
    backgroundColor: 'rgba(66,236,154);',
  },
  flexi: {
    display: 'flex',
    width: '100%',
  },
}));

const CustomizedTabs: React.FC<CustomTabs> = ({
  customTabs,
  children,
}: CustomTabs) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    // Validation if want search
    if (children && customTabs[newValue].searchUrl) {
      dispatch(setLocalSearch({ name: customTabs[newValue].label, url: '' }));
    }

    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.flexi}>
        <div className={children ? classes.width : classes.fullWidth}>
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
        {children}
      </div>
      {customTabs.map((tab, index) => (
        <>
          <TabPanel value={value} index={index}>
            {tab.component}
          </TabPanel>
        </>
      ))}
    </div>
  );
};

export default CustomizedTabs;
