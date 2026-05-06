function confirm1Tag(id) {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        confirmButtonClass: 'btn btn-success px-3 m-1',
        cancelButtonClass: 'btn btn-danger px-3 m-1',
        buttonsStyling: false,
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            event.preventDefault();
            document.getElementById('confirm1-form-'+id).submit();
        } else if (
            // Read more about handling dismissals
            result.dismiss === swal.DismissReason.cancel
        ) {
            swal(
                'Cancelled'
            )
        }
    })
  }

function confirm2Tag(id) {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        confirmButtonClass: 'btn btn-success px-3 m-1',
        cancelButtonClass: 'btn btn-danger px-3 m-1',
        buttonsStyling: false,
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            event.preventDefault();
            document.getElementById('confirm2-form-'+id).submit();
        } else if (
            // Read more about handling dismissals
            result.dismiss === swal.DismissReason.cancel
        ) {
            swal(
                'Cancelled'
            )
        }
    })
  }

function confirm3Tag(id) {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        confirmButtonClass: 'btn btn-success px-3 m-1',
        cancelButtonClass: 'btn btn-danger px-3 m-1',
        buttonsStyling: false,
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            event.preventDefault();
            document.getElementById('confirm3-form-'+id).submit();
        } else if (
            // Read more about handling dismissals
            result.dismiss === swal.DismissReason.cancel
        ) {
            swal(
                'Cancelled'
            )
        }
    })
  }


    document.addEventListener('DOMContentLoaded', function() {
        const scrollContainer = document.querySelector('.custom-nav-section .nav-items');
        const leftArrow = document.querySelector('.custom-nav-section .nav-arrow.left-arrow');
        const rightArrow = document.querySelector('.custom-nav-section .nav-arrow.right-arrow');

        function updateArrows() {
            leftArrow.style.display = scrollContainer.scrollLeft > 0 ? 'block' : 'none';
            rightArrow.style.display = scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth ? 'block' : 'none';
        }

        leftArrow.addEventListener('click', function() {
            scrollContainer.scrollBy({ left: -150, behavior: 'smooth' });
        });

        rightArrow.addEventListener('click', function() {
            scrollContainer.scrollBy({ left: 150, behavior: 'smooth' });
        });

        scrollContainer.addEventListener('scroll', updateArrows);
        window.addEventListener('resize', updateArrows);

        updateArrows(); // Initial check to display arrows appropriately
    });
