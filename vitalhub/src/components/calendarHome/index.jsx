/* IMPORT DO CALENDARIO */
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';


export const CalendarHome = ({
}) => {
    const datesWhitelist = [{
        start: moment(),
        end: moment().add(7, 'days')  // total 4 days enabled
    }];
    const datesBlacklist = [moment().add(2, 'days')];

    return (
        <>
            <CalendarStrip
                calendarAnimation={{ type: 'sequence', duration: 30 }}
                dateContainerStyle={{ backgroundColor: '#60BFC5' }}
                daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: '#60BFC5' }}
                style={{ height: 100, paddingTop: 20, paddingBottom: 20 }}
                calendarHeaderStyle={{ color: 'black', marginBottom: 16 }}
                calendarColor={'#fff'}
                dateNumberStyle={{ color: 'black' }}
                dateNameStyle={{ color: '#ACABB7' }}
                highlightDateNumberStyle={{ color: 'black' }}
                highlightDateNameStyle={{ color: '#ACABB7' }}
                disabledDateNameStyle={{ color: 'black' }}
                disabledDateNumberStyle={{ color: 'black' }}
                datesWhitelist={datesWhitelist}
                datesBlacklist={datesBlacklist}
                // iconLeft={require('./img/left-arrow.png')}
                // iconRight={require('./img/right-arrow.png')}
                iconContainer={{ flex: 0.1 }}
            />

        </>
    )
}