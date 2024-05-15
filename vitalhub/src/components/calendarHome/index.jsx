/* IMPORT DO CALENDARIO */
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';



export const CalendarHome = () => {
    moment.updateLocale("pt-br", {

        /* MESES */
        months:
            "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
                "_"
            ),

        /* MESES ABREVIADOS */
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),

        /* DIAS */
        weekdays:
            "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
                "_"
            ),

        /* DIAS ABREVIADOS */
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),

        /* DIAS ABREVIADOS EM NÚMEROS */
        weekdaysMin: 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
    });

    //instância da data atual
    const currentDate = new Date();

    //define a data inicial como sendo o primeiro dia do mês
    const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    //define a data final como sendo o último dia do mês
    const endingDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);



    return (
            <CalendarStrip
                /*Seleção das datas */
                calendarAnimation={{ type: 'sequence', duration: 30 }}
                daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: '#60BFC5' }}

                /*Deixa a data do dia de hoje selecionado como default */
                selectedDate={currentDate}

                //data min e max - início do mês e final do mês
                minDate={startingDate}
                maxDate={endingDate}

                // Item selecionado
                highlightDateNameStyle={{ color: '#ACABB7' }}
                highlightDateNumberStyle={{ color: 'black' }}
                highlightDateContainerStyle={{backgroundColor: '#60BFC5'}}

                calendarHeaderStyle={{ color: 'black', marginBottom: 25, alignSelf : 'flex-start', paddingLeft: 45, fontFamily: 'Montserrat_800ExtraBold' }}
                calendarColor={'transparent'}
                dateNumberStyle={{ color: 'black' }}
                dateNameStyle={{ color: '#ACABB7' }}


                iconLeft={{display: 'none'}}
                iconRight={{display: 'none'}}
                iconContainer={{ flex: 0.1 }}

                /* tamanho do calendario total */
                style={{ height: 120, paddingTop: 20, paddingBottom: 20 }}


                dateContainerStyle= {{backgroundColor: '#000'}}
            />
    );
};
