 $('.favorite-button').on('click', function(event) {
        event.preventDefault(); // To prevent following the link (optional)

        if ($(this).hasClass('like')) {
            $(this).removeClass('like').addClass('unlike');
        } else {
            $(this).removeClass('unlike').addClass('like');
        }

        let element_id = $(this).closest('.manipulation').attr("data-id");

        $.ajax({
            type: "POST",
            url: "some.php", /// куда отправляем данные 
            data: { name: "John", location: "Boston", id: element_id } /// данные которые отправляем
        }).done(function( msg ) {
            alert( "Data Saved: " + msg );
        });
    });
