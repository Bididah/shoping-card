import { TestBed } from '@angular/core/testing';
import { ProductService } from './productservice';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ProductServiceService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that no unexpected HTTP requests were made
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get products from the server', () => {
    const testData = [
      //foods
      {
        id: 1,
        productName: '',
        price: 1.76,
        quantity: 7,
        isImported: true,
        category: 'Food',
      },
      {
        id: 14,
        productName: 'Apple - Fuji',
        price: 4.37,
        quantity: 3,
        isImported: true,
        category: 'Food',
      },
      {
        id: 17,
        productName: 'Muffin Batt - Carrot Spice',
        price: 3.84,
        quantity: 5,
        isImported: true,
        category: 'Food',
      },
      {
        id: 6,
        productName: 'Goldschalger',
        price: 9.71,
        quantity: 5,
        isImported: true,
        category: 'Food',
      },
      {
        id: 13,
        productName: 'Sponge Cake Mix - Chocolate',
        price: 1.4,
        quantity: 10,
        isImported: true,
        category: 'Food',
      },
      {
        id: 7,
        productName: 'Cheese - Goat',
        price: 3.81,
        quantity: 1,
        isImported: false,
        category: 'Food',
      },
      {
        id: 18,
        productName: 'Wine - Touraine Azay - Le - Rideau',
        price: 6.02,
        quantity: 4,
        isImported: true,
        category: 'Food',
      },
      {
        id: 2,
        productName: 'Soup Campbells - Italian Wedding',
        price: 9.1,
        quantity: 4,
        isImported: false,
        category: 'Food',
      },
      // medicine
      {
        id: 12,
        productName: 'codeine',
        price: 7.86,
        quantity: 3,
        isImported: true,
        category: 'Medecine',
      },
      {
        id: 5,
        productName: 'Asperin',
        price: 6.85,
        quantity: 3,
        isImported: false,
        category: 'Medecine',
      },
      {
        id: 15,
        productName: 'Paracetamol',
        price: 9.5,
        quantity: 0,
        isImported: true,
        category: 'Medecine',
      },
      // books
      {
        id: 3,
        productName: 'The Stranger in the Lifeboat',
        price: 16.38,
        quantity: 7,
        isImported: true,
        category: 'Books',
      },
      {
        id: 11,
        productName: 'The World of the End',
        price: 14.02,
        quantity: 9,
        isImported: false,
        category: 'Books',
      },
      {
        id: 19,
        productName: 'the power of habit',
        price: 11.84,
        quantity: 4,
        isImported: false,
        category: 'Books',
      },
      {
        id: 8,
        productName: 'Sapiens',
        price: 12.61,
        quantity: 8,
        isImported: false,
        category: 'Books',
      },
      // electronic devices
      {
        id: 16,
        productName: 'USB Flash Drive 64GB',
        price: 9.18,
        quantity: 8,
        isImported: true,
        category: 'Electric',
      },
      {
        id: 9,
        productName: 'Wireless Keyboard',
        price: 9.16,
        quantity: 5,
        isImported: false,
        category: 'Electric',
      },
      // parfums
      {
        id: 4,
        productName: 'Dior sauvage 100ml',
        price: 73.58,
        quantity: 6,
        isImported: false,
        category: 'Parfum',
      },
      {
        id: 10,
        productName: 'Giorgio Armani Acqua Di Gio 100ml',
        price: 76.32,
        quantity: 8,
        isImported: false,
        category: 'Parfum',
      },
    ];
    service.getProducts().subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne('http://localhost:3000/products'); // Expect a GET request to this URL
    expect(req.request.method).toEqual('GET');

    req.flush(testData); // Provide mock response
  });

  it('should handle errors properly', () => {
    service.getProducts().subscribe(
      (data) => fail('expected an error, but received data'),
      (error) => {
        expect(error).toBeTruthy();
      }
    );
    const req = httpMock.expectOne('http://localhost:3000/products');
    req.error(new ErrorEvent('Network error'), {
      status: 404,
      statusText: 'Not Found',
    });
  });
});
