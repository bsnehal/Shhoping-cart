var app = angular.module("mainApp", []);  
       app.controller('CRUDController', function ($scope) {  
  
           $scope.bookModel = {  
               Title: '',  
               Description: '',  
               PublishDate: 'dd/mm/yyyy',
               PageCount:'',
           };  
  
           $scope.bookList = [];  
           $scope.AddData = function () {  
               var _book = {  
                   BookTitle: $scope.bookModel.BookTitle,  
                   Description: $scope.bookModel.Description,  
                   PublishDate: $scope.bookModel.PublishDate,
                   PageCount:$scope.bookModel.PageCount
               };  
               $scope.bookList.push(_book);  
               ClearModel();  
           }  
  
           function ClearModel() {  
               $scope.bookModel.BookTitle = '';  
               $scope.bookModel.Description = '';  
               $scope.bookModel.PublishDate = 'dd/mm/yyyy';
               $scope.bookModel.PageCount = 0;
           }
           
           
           $scope.DeleteData = function (book) {  
               var _index = $scope.bookList.indexOf(book);  
               $scope.bookList.splice(_index, 1);  
           }  

           $scope.BindSelectedData = function (book) {  
        	    $scope.bookModel.BookTitle = book.BookTitle;  
        	    $scope.bookModel.Description = book.Description;  
        	    $scope.bookModel.PublishDate = book.PublishDate;
        	    $scope.bookModel.PageCount = book.PageCount;
        	}  

           $scope.UpdateData = function () {  
        	    $.grep($scope.bookList, function (e) {  
        	        if (b.BookTitle == $scope.bookModel.BookTitle) {  
        	            b.Description = $scope.bookModel.Description;  
        	            b.PublishDate = $scope.bookModel.PublishDate;
        	            b.PageCount=$scope.bookModel.PageCount;
        	        }  
        	    });  
        	    ClearModel();  
        	}  

       });  
