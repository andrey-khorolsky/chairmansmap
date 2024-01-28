console.log("pf");

// ------------
// functions

function person_full_name(person){
    return `${person.surname} ${person.first_name} ${person.middle_name}`;
};

// end of functions
// ------------

$(document).ready(function () {
    $(".people_filter").click(function(){
        $.get("/person/actived",
            {type: $("#" + $(this).attr("for")).val()},
            function(result){
                $("tbody").html("");
                result.forEach(element => {
                    $("tbody").append(`<tr>\
                        <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm flex items-center ml-3'>\
                            <p class='text-gray-900 whitespace-no-wrap'>${person_full_name(element)}</p>\
                        </td>\
                        <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>\
                            <p class='text-gray-900 whitespace-no-wrap'>${element.tel}</p>\
                        </td>\
                        <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>\
                            <p class='text-gray-900 whitespace-no-wrap'>${element.address}</p>\
                        </td>\
                        <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>\
                            <p class='text-gray-900 whitespace-no-wrap'>${element.member_from}</p>\
                        </td>\
                        <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>\
                            <p class='text-gray-900 whitespace-no-wrap'>${element.plot_count}</p>\
                        </td>\
                        <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>\
                            <a href='/person/${element.id}/edit'>Редактировать</a>\
                        </td>\
                    </tr>`);
                });
            }
        );
    });
});
