import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FormControl } from "react-bootstrap";
import StockTicker from "./StockTicker";

function Header() {
  
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} className="mb-2  pt-0" to="/">
          <img
            src="https://www.alokitotetulia.com/public/cropped-cropped-Alokitotetulia.png.png"
            alt=""
            width={'185px'}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              প্রচ্ছদ
            </Nav.Link>
            <Nav.Link as={Link} to="/national">
              জাতীয়
            </Nav.Link>
            <Nav.Link as={Link} to="/international">
              আন্তর্জাতিক
            </Nav.Link>
            <Nav.Link as={Link} to="/sara-desh">
              সারাদেশ
            </Nav.Link>
            <NavDropdown title="বিভাগীয়" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/dhaka">
                ঢাকা
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/khulna">
                খুলনা
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rangpur">
                রংপুর
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/chittagong">
                চট্টগ্রাম
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sylhet">
                সিলেট
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/barisal">
                বরিশাল
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rajshahi">
                রাজশাহী
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/panchagarh-news">
                পঞ্চগড়ের খবর
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="অন্যান্য" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/sports">
                খেলাধূলা
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/entertainment">
                বিনোদন
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/education">
                শিক্ষা
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/health">
                স্বাস্থ্য
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jobs">
                চাকুরী
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lifestyle">
                লাইফ স্টাইল
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/video-gallery">
                ভিডিও গ্যালারি
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/feature">
                ফিচার
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tech">
                তথ্যপ্রযুক্তি
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/agriculture">
                ভ্রমণকৃষি
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/other">
                সাম্প্রতিক
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/politics">
              রাজনীতি
            </Nav.Link>
          </Nav>

          <Form inline className="align-items-center d-flex">
            <FormControl
              type="text"
              placeholder="খোঁজ করুন"
              className="mr-sm-2"
            />
            <Button className=" ms-2 w-50" variant="outline-success">
              খোঁজ করুন
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <StockTicker />
    </>
  );
}
export default Header;
